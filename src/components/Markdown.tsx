import { Button, Link, makeStyles } from '@fluentui/react-components'
import { Alert } from '@fluentui/react-components/unstable'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import '../styles/index.css'

const useStyles = makeStyles({
    backToHome: {
        textAlign: 'left'
    },
    title: {
        textAlign: 'center',
        fontSize: '2.5rem',
        lineHeight: 1.25
    },
    context: {
        paddingTop: '6px',
        paddingLeft: '16px',
        paddingRight: '16px',
        maxWidth: '650px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '18px',
        lineHeight: '24px',
    },
    switchButton: {
        marginTop: '24px'
    }
})

export default function Markdown(props: { cn_title: string, en_title: string, cn_context: any, en_context: any }) {
    const styles = useStyles()
    const [lang, setLang] = useState("en")
    if (lang == 'cn') {
        return (
            <div>
                <div className={styles.backToHome}>
                    <Link href='/'>
                        &larr; 返回首页
                    </Link>
                </div>
                <h1 className={styles.title}>
                    {props.cn_title}
                    <br />
                    <Button appearance='primary' onClick={()=>{setLang('en')}} className={styles.switchButton}>
                        Switch To Engilsh
                    </Button>
                </h1>
                <div className={styles.context} >
                    <ReactMarkdown>
                        {props.cn_context}
                    </ReactMarkdown>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className={styles.backToHome}>
                <Link href='/'>
                    &larr; Back to home
                </Link>
            </div>
            <h1 className={styles.title}>
                {props.en_title}
                <br />
                <Button appearance='primary' onClick={()=>{setLang('cn')}} className={styles.switchButton}>
                    切换到 中文(简体)
                </Button>
            </h1>
            <div className={styles.context}>
                <ReactMarkdown>
                    {props.en_context}
                </ReactMarkdown>
            </div>
        </div>
    )
}