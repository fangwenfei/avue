import Crud from './crud/index.js'
import CrudCheckbox from './crud-checkbox/index.js'
import CrudDate from './crud-date/index.js'
import CrudTime from './crud-time/index.js'
import CrudInput from './crud-input/index.js'
import CrudRadio from './crud-radio/index.js'
import CrudSelect from './crud-select/index.js'
import CrudCascader from './crud-cascader/index.js'
import CrudNumberInput from './crud-input-number/index.js'
import CrudUeditor from './crud-ueditor/index.js'
import CrudSwitch from './crud-switch/index.js'
import CrudRate from './crud-rate/index.js'
import CrudUpload from './crud-upload/index.js'
import CrudSilder from './crud-silder/index.js'
import DataDisplay from './data-display/index.js'
import DataCard from './data-card/index.js'
import DataTabs from './data-tabs/index.js'
import DataIcons from './data-icons/index.js'
import DataBox from './data-box/index.js'
import Form from './form/index.js'
import FormTabs from './form-tabs/index.js'
import FormSteps from './form-steps/index.js'
import FormDetail from './form-detail/index.js'
import TableTree from './table-tree';
import { vaildData } from './utils/util'
import './theme-chalk/src/common.scss'
const components = [
    Crud,
    Form,
    FormTabs,
    FormSteps,
    FormDetail,
    CrudCheckbox,
    CrudDate,
    CrudTime,
    CrudInput,
    CrudRadio,
    CrudSelect,
    CrudCascader,
    CrudNumberInput,
    CrudUeditor,
    CrudSwitch,
    CrudRate,
    CrudUpload,
    CrudSilder,
    DataDisplay,
    DataCard,
    DataIcons,
    DataTabs,
    DataBox,
    TableTree,
]
const install = function(Vue, opts = {}) {
    Vue.prototype.$http = window.axios;
    Vue.prototype.vaildData = vaildData;
    const AVUE = {
        clientHeight: document.documentElement.clientHeight
    };
    components.map(component => {
        Vue.component(component.name, component);
    });

    AVUE.size = opts.size || '';
    Vue.prototype.$AVUE = AVUE;
}

if (typeof window !== 'undefined') {
    if (!window.axios) {
        console.error('You have to install axios')
    } else if (!window.ELEMENT) {
        console.error('You have to install element')
    } else {
        install(window.Vue);
    }

}
export default {
    version: '2.0.0',
    Crud,
    Form,
    FormTabs,
    FormSteps,
    FormDetail,
    CrudCheckbox,
    CrudDate,
    CrudTime,
    CrudInput,
    CrudRadio,
    CrudSelect,
    CrudCascader,
    CrudNumberInput,
    CrudUeditor,
    CrudSwitch,
    CrudRate,
    CrudUpload,
    CrudSilder,
    DataDisplay,
    DataCard,
    DataIcons,
    DataTabs,
    DataBox,
    TableTree,
}