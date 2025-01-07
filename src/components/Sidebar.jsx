import { PencilLine } from "phosphor-react"
import styles from "./Sidebar.module.css"
import { Avatar } from "./Avatar"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/lucasvda.png"/>
                {/* <img className={styles.avatar} src="https://github.com/lucasvda.png" /> */}

                <strong>Lucas Venancio</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil
                </a>
            </footer> 
        
        </aside>
    )
}