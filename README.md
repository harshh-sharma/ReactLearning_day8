

# what is class component ? 
   - First of all what is function component :-
        A function component is a normal javascript function that returns some peices of JSX.

    - Then What is class based component :-
        A class based component is a normal javascript class which extends with react.createELement and it has render method that returns some peices of JSX

# What is a syntax of class based component ?
   - first of all we know about syntax of function component for better understanding
        syntax: 
                const ComponentName = () => {
                    return(
                        <div>  // That return some peices of JSX
                            <h1>Hello Harsh</h1>
                        </div>
                    )
                }

    - Then syntax of class based component 
        syntax : 
                class ComponentName extends React.component{
                    render(){ 
                        return(  // render() return some peices of JSX
                        <div>
                            <h1>Hello Harsh</h1>
                        </div>
                        );
                    }
                }
            
# How take props in class based component ?
  - First of all we know about how to pass props in function function component
    syntax : 
            const ComponentName = (props) => {
                const {name} = props;
                retrun(
                    <div>
                        <h1>Hello {name}</h1>
                    </div>
                );
            }
        
    - syntax of taking props in class based component
        class ComponentName extends React.component{
            constructor(props){
                super(props)
            }
            render(){ 
                const {name} = this.props.name;
                        return(  // render() return some peices of JSX
                        <div>
                            <h1>Hello {name}</h1>
                        </div>
                        );
                    }
        }
    
# Passing props to a class based component
 - The syntax of passing props to function and class based component is same
    <ComponentName name = {React}/>
  
# What is constructor ?
# What is render method ?
# What is super ?
# What is this keyword ?
# What is extends ?
# Why super keyword uses is mandatory when you take a props to our component

# How to make state variable in class based components ?
  - By using function based component
    syntax: 
        const ComponentName = () => {
            const [count] = useState(0);
        }
    
  - By using class based components
    syntax:
        class ComponentName extends React.component{
            constructor(){
                this.state = {
                    count : 0
                }
            }
        }

# How to make multiple States ?
 - By using function based component 
   syntax:
        const ComponentName = () => {
            const [count] = useSate(0);
            const [count1] = useState(1);
        }
    
 - By using class based component
    syntax: 
        class ComponentName extends React.component{
            constructor(){
                this.state = {
                    count : 0,
                    count1 : 1
                }
            }
        }
    
# How to use state in our component
 - By using function component 
    syntax: 
        const ComponentName = () => {
            const [count] = useSate(0);
            const [count1] = useState(1);
        return(
            <div>
                <h1>Count : {count(stateVariableName)}</h1>
                <h1>Count 1 : {count1(stateVariableName)}
            </div>
        )
        }
    
 - By using class based component 
   syntax: 
    class ComponentName extends React.component{
        constructor(){
            this.state = {
                count : 0,
                count1 : 1
            }
        }
        render(){
            const {count ,count1} = this.state;
            return(
                <div>
                    <!-- <h1>Count : {this.state.count}</h1>
                    <h1>Coun1 : {this.state.count}</h1> -->
                    <h1> Count : {count}</h1>
                    <h1> Count1 : {count1}</h1>
                </div>
            );
        }
    }

# How to update state of class based component 
  - By function based components :
    syntax : 
           const ComponentName = () => {
            const [count,setCount] = useSate(0);
                return(
                    <div>
                        <button onClick(() => {
                            setCount(count+1);
                        })> Count Increases </button>
                    </div>
                )
            }

  - By using class based Components :
    syntax : 
        class ComponentName extends React.component{
            constrctor(){
                this.state = {
                    count : 0;
                }
            }
            render(){
                retrun(
                    <div>
                        <button onClick(() => {
                            this.setState({
                                count : this.state.count + 1,
                            })
                        })>Increase count</button>
                    </div>
                );
            }
        }

# How react life cycle works ?
 - For taking an how the react cycle works behid the scene
    - Like I have 2 class based components

    1. class About extends React.component{
        constructor(){
            super()
            console.log("Parent Constructor is calls );
        }
        componentDitMount(){
            console.log("Parent component did mount is calls");
        }
        render(){
            return(
                console.log("Parent render is calls");
                <div>
                    <h1>Hello</h1>
                    <userClass />
                </div>
            );
        }
    }

    2.  class userClass extends React.component{
        constructor(){
            super()
            console.log("Child Constructor is calls );
        }
        componentDitMount(){
            console.log("Child component did mount is calls");
        }
        render(){
            return(
                console.log("Child render is calls");
                <div>
                    <h1>Hello world</h1>
                </div>
            );
        }
    }

    - In above example of react life cycle first the parent constructor then parent render call and when the render method render the component line by line they see userClass component then call userClass component then child constructor call then child render call when the render method completely render the component then child componentDidMount call then reverse back parent component and when the parent component is completely render the parent componentDidMount is calls that how's the react life cycles work

# Where componentDidMount is used ?
 - When you have Api call then we use componentDidMount to call Api after the component completely render on a web page
