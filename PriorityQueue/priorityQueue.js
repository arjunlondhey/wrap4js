class PriorityQueue {

    constructor() {
        this.nodes = [];
    }

    add(element, priority) {
        var qElement = new QElement(element, priority);
        var isElementFound = false;

        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].priority > qElement.priority) {
                this.nodes.splice(i, 0, qElement);
                isElementFound = true;
                break;
            }
        }

        if (!isElementFound) {
            this.nodes.push(qElement);
        }
    }

    poll() {
        if (this.isEmpty())
            return "Underflow";
        return this.nodes.shift().element;
    }

    peek() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.nodes[0].element;
    }

    rear() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.nodes[this.nodes.length - 1];
    }

    isEmpty() {
        return this.nodes.length == 0;
    }

    changePriority(element, priority) {
        this.nodes.splice(this.getElementIndex(element), 1);
        this.add(element, priority);
    }

    hasValue(element) {
        return this.getElementIndex(element) ? true : false;
    }

    getElementIndex(element) {
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].element == element) {
                return i;
            }
        }
        return null;
    }
}

class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

module.exports = { PriorityQueue }