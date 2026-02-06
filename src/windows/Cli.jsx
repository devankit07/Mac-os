import Macwindow from './Macwindow'
import Terminal from 'react-console-emulator'

const Cli = ({ windowname, setwindow }) => {
    const commands = {
        echo: {
            description: "Echo a passed string.",
            usage: "echo <string>",
            fn: (...args) => args.join(' ')
        },
        about: {
            description: "Learn about my professional background.",
            usage: "about",
            fn: () => "Hi! I'm Ankit, a high-performance Full-Stack Engineer. I specialize in building scalable web applications with React, Node.js, and modern system architectures. "
        },
        skills: {
            description: "Display technical expertise.",
            usage: "skills",
            fn: () => `
Frontend: React.js (Expert), Next.js, Tailwind CSS, Framer Motion
Backend:  Node.js, Express.js, PostgreSQL, Redis (Caching)
DevOps:   Docker, AWS (EC2/S3), Linux Terminal, Git`
        },
        projects: {
            description: "View my featured work.",
            usage: "projects",
            fn: () => `
1. MacOS Portfolio Clone: Fully functional React desktop with Draggable logic.
2. Real-time Collab Tool: Socket.io powered workspace with 40% latency reduction.
3. E-commerce Dashboard: MERN stack admin panel with real-time analytics.`
        },
        contact: {
            description: "Get contact and social links.",
            usage: "contact",
            fn: () => "Email: ankit.dev@email.com\nGitHub: github.com/ankit-projects\nLinkedIn: linkedin.com/in/ankit-dev"
        },
        ls: {
            description: "List directory contents.",
            usage: "ls",
            fn: () => "Documents/  Downloads/  Projects/  resume.pdf  config.ts"
        },
        sudo: {
            description: "Execute command as superuser.",
            usage: "sudo <command>",
            fn: () => "Permission denied: Ankit is the only authorized superuser. 😉"
        },
        socials: {
            description: "Quick links to social media.",
            usage: "socials",
            fn: () => "Opening LinkedIn... (Just kidding, use the 'contact' command for links!)"
        }
    };

    return (
        <Macwindow windowname={windowname} setwindow={setwindow}>
            <div className='cli-window' style={{ height: '100%', backgroundColor: '#000' }}>
                <Terminal
                    commands={commands}
                    welcomeMessage={[
                        "Welcome to Ankit's Portfolio Terminal (v2.4.0-stable)",
                        "--------------------------------------------------",
                        "System: Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-x86_64)",
                        "Status: Open to Opportunities | Location: Remote/Global",
                        "Type 'help' to see all available commands.",
                        "--------------------------------------------------"
                    ].join('\n')}
                    promptLabel={'ankit@macos:~$'}
                    promptStyle={{ color: '#00ff00' }}
                    inputStyle={{ color: '#fff', fontFamily: 'Courier New, monospace' }}
                    style={{
                        backgroundColor: 'transparent',
                        minHeight: '100%',
                        boxShadow: 'none'
                    }}
                    contentStyle={{ color: '#00ff00' }} // Classic Matrix Green
                />
            </div>
        </Macwindow>
    )
}

export default Cli;