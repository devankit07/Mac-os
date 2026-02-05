import Macwindow from './Macwindow'
import Terminal from 'react-console-emulator'

const Cli = ({ windowname, setwindow }) => {
    return (
        <Macwindow windowname={windowname} setwindow={setwindow}>
                <div className='cli-window'>
                        <Terminal
                         commands={{
                                echo:{
                                        description:"Echo a passed String.",
                                        usage:"echo <string>",
                                        fn:(...args) => args.join('')
                                },
                                about:{
                                        description:"Learn about me",
                                        usage:"about",
                                        fn:() => "Hi! I'm Ankit, a full-stack developer passionate about building amazing web experiences."
                                },
                                projects:{
                                        description:"View my projects",
                                        usage:"projects",
                                        fn:() => "1. Portfolio Website\n2. E-commerce App\n3. Chat Application\n4. Weather Dashboard"
                                },
                                skills:{
                                        description:"Display my technical skills",
                                        usage:"skills",
                                        fn:() => "JavaScript, React, Node.js, MongoDB, CSS, HTML, Git, Docker"
                                },
                                contact:{
                                        description:"Get my contact information",
                                        usage:"contact",
                                        fn:() => "Email: ankit@example.com\nLinkedIn: linkedin.com/in/ankit\nGitHub: github.com/ankit"
                                },
                         }}
                         welcomeMessage={'Welcome to Ankit\'s Portfolio Terminal!\n\nAvailable commands: echo, about, projects, skills, contact, clear, help\n\nType "help" to see all commands or start exploring!'}
                         promptLabel={'ankit:~$'}
                         promptStyle={{color:'#00ff00'}}
                        />
                </div>
        </Macwindow>
    )
}

export default Cli
