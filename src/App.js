import React from 'react';
import './style.scss';
import Markdown from 'marked-react';
import hljs from 'highlight.js';
import 'highlight.js/styles/an-old-hope.css';

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const Editor = (props) => {
    return (
        <textarea id="editor" value={props.text} onChange={props.onChange} />
    );
};

const Previewer = (props) => {
    return (
        <div id="preview">
            <Markdown breaks={true}>{props.result}</Markdown>
        </div>
    );
};

const Toolbar = (props) => {
    return (
        <div id="toolbar" style={props.style}>
            <p>{props.title}</p>
        </div>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: initialText,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState((state) => ({
            input: event.target.value,
        }));
    }

    render() {
        return (
            <div>
                <div>
                    <Toolbar style={{ width: '85%' }} title="Editor" />
                    <Editor
                        text={this.state.input}
                        onChange={this.handleChange}
                    />
                </div>
                <br />
                <Toolbar style={{ width: '90%' }} title="Previewer" />
                <Previewer result={this.state.input} />
            </div>
        );
    }
}

export default App;
