/**
 * Created by jwqin on 10/20/15.
 */
import Falcor from 'falcor'
import FalcorDataSource from 'falcor-http-datasource'

const model = new Falcor.Model({
  source: new FalcorDataSource('/model.json')
});

export default model;