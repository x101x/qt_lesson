//@func 就地编辑
//@author wo
//网站的基础类 不是具体业务 抽象的公共业务
function EditorInPlace(id, parent, initVal) {
    //constructor
    this.id = id;
    this.parentElement = parent;
    this.value = initVal || "default value";
    this.createElement(); // 动态DOM
    this.attachEvents();

    
}
EditorInPlace.prototype.attachEvents = function () {
    //   挂载到页面上
    let self = this; //对象
    // this.fieldElement.style.display = 'none';
    this.staticElement.addEventListener('click', function () {
        // console.log(this);
        self.convertToEdit();
    }, false)
    this.fieldElement.addEventListener('keydown',(event)=>{
        if(event.keyCode==13){
            this.staticElement.innerHTML=this.fieldElement.value;
            this.convertToText()
        }
    })
}
EditorInPlace.prototype.createElement = function () {
    this.containerElement =
        document.createElement('div');
    this.containerElement.id = this.id;
    this.staticElement =
        document.createElement('span');
    this.staticElement.innerText = this.value;

    this.fieldElement = document.createElement(
        'input');
    this.fieldElement.type = 'text';
    this.fieldElement.value = this.value;
    // this.fieldElement.style.display = 'none';
    this.containerElement.appendChild(
        this.fieldElement);

    this.containerElement.appendChild(
        this.staticElement
    );
    this.parentElement.appendChild(
        this.containerElement);
    // 两个状态
    this.convertToText();
}


EditorInPlace.prototype.convertToText = function () {
    this.fieldElement.style.display = 'none';
    this.staticElement.style.display = 'inline';
}

EditorInPlace.prototype.convertToEdit = function () {
    this.fieldElement.style.display = 'inline';
    this.staticElement.style.display = 'none';
}