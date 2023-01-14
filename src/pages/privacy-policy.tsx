import { Component, ReactNode } from "react";
import Markdown from "../components/Markdown";

export default class PrivacyPolicy extends Component {
    constructor(props: any) {
        super(props)
    }

    state = {
        en: "Loading",
        cn: "加载中"
    }

    componentDidMount() {
        fetch("/documents/PrivacyPolicy_en.md")
            .then(enres=>enres.text())
            .then((endata) => {
                console.log(endata)
                fetch("/documents/PrivacyPolicy_cn.md")
                    .then(cnres=>cnres.text())
                    .then((cndata) => {
                        console.log(cndata)
                        this.setState({
                            en: endata,
                            cn: cndata
                        })
                })
        })
    }
    
    render(): ReactNode {
        return (
            <div className="markdown-body">
                <Markdown cn_title="隐私政策" en_title="Privacy Policy" cn_context={this.state.cn} en_context={this.state.en} />
            </div>
        )
    }
}