class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        
    }

    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    get(index) {
        let current = this.head;
        let i=0

        while(i<index){
            current = current.next;
            i++;
        }
        return current.data;
    }

    insertAt(index,data){
        if(index===0){
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
           
        }else{
            let current = this.head;
            let previous = null;
            let i=0
            while(i<index){
                previous = current;
                current = current.next;
                i++;
            }
            const newNode = new Node(data);
            newNode.next = current;
            previous.next = newNode;
        }
    }

    removeFrom(index){
        if(index===0){
            this.head = this.head.next;
            
           
        }else{
            let current = this.head;
            let previous = null;
            let i=0
            while(i<index){
                previous = current;
                current = current.next;
                i++;
            }
           previous.next = current.next;
        }
    }

    printAll(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }

    
}

const list = new LinkedList()
list.add(100)
list.add(200)
list.add(300)
list.add(400)

list.insertAt(2,250)
list.removeFrom(1)

list.printAll()
