/*
 * written by renyun.huang@gmail.com
 * https://github.com/renyunhuang
 */
PHPHelp = {
    is_string: function ($str) {
        return (typeof($str == 'string')) ? true : false;
    }
}
dynamicNode = {
    nodeInit: function () {
        if (!document.getElementById || !document.createTextNode) return;
        //ceate input text
        var input = dynamicNode.createNode('input');
        if (!input) return;
        $arrAttributes = new Array();
        $arrAttributes['type'] = 'text';
        $arrAttributes['value'] = 'click me!';
        $arrAttributes['size'] = 20;
        $arrAttributes['max-length'] = 100;
        $arrAttributes['value'] = 'click me';
        dynamicNode.addParams(input, 'autofocus', 'autofocus');
        dynamicNode.addParams(input, $arrAttributes);
        //create span
        var inputName = DOMhelp.createTextElm('span', 'Input :');
        var bodyNode = document.getElementsByTagName('body')[0];
        dynamicNode.appendNode(inputName, bodyNode);
        dynamicNode.appendNode(input, bodyNode);
    },
    createNode: function (nodeName) {
        if (nodeName == null) nodeName = 'input';
        var tempInput = document.createElement(nodeName);
        return tempInput;
    },
    addParams: function (o, attrVal, val) {
        if (typeof o != 'object') return;
        if (PHPHelp.is_string(attrVal) && val)
            o.setAttribute(attrVal, val);
        else {
            for (index in attrVal)
                o.setAttribute(index, attrVal[index]);
        }
    },
    appendNode: function (node, to) {
        if (!node || !to) return;
        return to.appendChild(node);
    },
}
