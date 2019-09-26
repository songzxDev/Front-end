import { TabView } from './components/TabView'
import { ScrollView } from './components/ScrollView'
import { Text } from './components/Text'
import './style/reset.less'
import './style/style.less'

function myCreate(Class, Attributes, ...children) {
    let object = new Class()
    for (let name in Attributes) {
        object.setAttribute(name, Attributes[name])
    }
    for (let child of children) {
        if (typeof child === 'string') {
            object.appendChild(new Text(child))
        } else {
            object.appendChild(child)
        }
    }
    return object
}

let tab = <TabView style="width: 100%; height: 100%">
<ScrollView tab-title="item1" style="background: lightpink">
    abc abc abc abc abc abc abc abc abc abc
    abc abc abc abc abc abc abc abc abc abc
    abc abc abc abc abc abc abc abc abc abc
    abc abc abc abc abc abc abc abc abc abc
    abc abc abc abc abc abc abc abc abc abc
    abc abc abc abc abc abc abc abc abc abc
    abc abc abc abc abc abc abc abc abc abc
</ScrollView>
<ScrollView tab-title="item2" style="background: lightseagreen"></ScrollView>
<ScrollView tab-title="item3" style="background: lightblue"></ScrollView>
</TabView>

tab.appendTo(document.body)

console.log(tab)