import {Page, MapTo, withComponentMappingContext } from "@adobe/cq-react-editable-components";
 
...
 
class AppPage extends Page {
...
}
 
MapTo('react-demo/pages/page')(withComponentMappingContext(AppPage));
