import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lucasvda.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Venancio</strong>
                            <time title="03 de Janeiro às 22:12h" dateTime="2025-01-03 22:12:34">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        Muito bom Devon, parabéns!! 👏👏
                    </p>


                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}