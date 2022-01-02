import React from 'react';


interface Props {
    text: string
}
class WriteText extends React.Component<Props> {
    text: string

    constructor(props: Props) {
        super(props)
        this.text = props.text; 
    }

    writeText() {        
        const words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let curLength = -1;
        let loops = 0;
        let text = this.text;
        this.text = '';
    
        const interval = setInterval(() => {
            this.forceUpdate();    
            if (loops / 3 === 1) {loops = 0; curLength++;}
            loops++;
    
            let string = '';
            for (let i = 0; i <= curLength; i++) {
                string+=text[i];
            }
            
            if (curLength === text.length-1) {
                this.text = text;
                clearInterval(interval);
                this.forceUpdate();   
                return;
            }
    
            string += words[Math.floor(Math.random() * words.length)];
            this.text = string; 
        }, 60);
        
        this.text = 'asdasdasd'
    }

    componentDidMount() {
        this.writeText()
    }

    render() {
        return <span>{this.text}</span>
    }
}

export default WriteText;