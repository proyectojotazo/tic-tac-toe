class Msg {
    constructor(element, def=''){
        this.element = element
        this.classes = ['hidden-msg', 'win', 'tie']
        this.defaultText = def 
    }

    addText(text){
        this.element.innerText = text        
    }

    removeText(){
        this.element.innerText = ''
    }
        
    addClass(className){
        this.element.classList.add(className)
    }

    removeClass(className){
        this.element.classList.remove(className)
    }

    showMsg(){
        this.removeClass(this.classes[0])
    }

    hideMsg(){
        this.addClass(this.classes[0])
    }

}

class MsgFinish extends Msg{
    constructor(element){
        super(element)
    }

    setMsg(msg, tie=false){
        this.addText(msg)
        this.removeClass(this.classes[0])

        if (!tie) this.addClass(this.classes[1])
        else this.addClass(this.classes[2])
    }

    resetMsg(){
        this.classes.forEach(classEl => {
            this.removeClass(classEl)
        })
        this.addClass(this.classes[0])
        this.removeText()
    }

}

const msgFinishElement = document.getElementsByClassName('msg-finish')[0]
const msgTurnElement = document.getElementsByClassName('msg-next-player')[0]

export const turnMsg = new Msg(msgTurnElement, 'Player X Turn')
export const finishMsg = new MsgFinish(msgFinishElement)