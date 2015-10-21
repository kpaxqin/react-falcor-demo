/**
 * Created by jwqin on 10/20/15.
 */
import FalcorServer from 'falcor-express'
import bodyParser from 'body-parser'
import express from 'express'
import Router from 'falcor-router'
import data from './data.js'

const app = express();

const NamesRouter = Router.createClass([
  {
    route: 'names.length',
    get: ()=>{
      return {
        path: ['names', 'length'],
        value: data.names.length
      }
    }
  },
  {
    route: 'names[{integers:nameIndexes}]["name"]',
    get: (pathSet)=>{
      const results = [];

      pathSet.nameIndexes.forEach((nameIndex)=>{
        if (data.names.length > nameIndex){
          results.push({
            path: ['names', nameIndex, 'name'],
            value: data.names[nameIndex].name
          })
        }
      });
      return results;
    }
  },
  {
    route: 'names.add',
    call: (callPath, args)=>{
      const newName = args[0];

      data.names.push({
        name: newName
      });
      return [
        {
          path: ['names', data.names.length-1, 'name'],
          value: newName
        },
        {
          path: ['names', 'length'],
          value: data.names.length
        }
      ]
    }
  }
]);

app.use(bodyParser.urlencoded({extended: false}));
app.use('/model.json', FalcorServer.dataSourceRoute(()=> new NamesRouter()));
app.use(express.static('.'));
app.listen(9090, err=>{
  if (err){
    console.error(err);
    return;
  }
  console.log('navigate to http://localhost:9090')
});
