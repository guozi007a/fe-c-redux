// 发布问题内容的页面
import React, { Component } from 'react'
import { Input, Button } from 'antd'
// import {/* reqSaveQues, */ reqUser} from '../../../api/index'
import {connect} from 'react-redux'
// import {mdQuesTitle} from '../../../redux/actions'
// import {Redirect} from 'react-router-dom'
import { /* mdQuesTitle, mdQuesCon, */ getUser, saveQuesAsync } from '../../../redux/actions'

const { TextArea } = Input

class MdQues extends Component {
    state = {
        quesTittle: '', // 问题标题
        quesContent: '', // 问题内容
    }
    componentDidMount() {
        // 这里要预先获取数据。 然后需要用到什么数据，就直接取
        // 这里不预先获取，后面需要nickname的时候，从this.props里面是拿不到的，空的
        this.props.getUser()
        // const {nickname} = this.props
    }
    // 写标题
    changeQuesTittle = (e) => {
        this.setState({
            quesTittle: e.target.value 
        })
    }
    // 写内容
    changeQuesContent = (e) => {
        this.setState({
            quesContent: e.target.value
        })
    }
    // 点击发布
    handleSaveQues = () => {
        let publishDate = new Date().getFullYear() + '-' 
            + (new Date().getMonth() + 1) + '-' 
            + new Date().getDate() + ' ' 
            + new Date().getHours() + ':' 
            + new Date().getUTCMinutes() + ':' 
            + new Date().getSeconds()
        const {nickname} = this.props 
        const {quesTittle, quesContent} = this.state
        this.props.saveQuesAsync({quesTittle, quesContent, publishDate, nickname})
        this.props.history.replace('/main/articles')
    }
    render() {
        return (
            <div style={{margin: '0 auto', width: '80%'}} >
                <div style={{ margin: '10px 0' }} />
                <Input 
                    placeholder="请输入标题，不超过100个字符"
                    style={{width: '50%'}}
                    maxLength={100}
                    onChange={this.changeQuesTittle}
                />
                <div style={{ margin: '24px 0' }} />
                <TextArea 
                    // autoSize='true' // 自适应高度
                    autoSize={{ minRows: 15}} // 自适应高度设置最少15行
                    style={{width: '80%'}}
                    placeholder='请输入问题内容'
                    onChange={this.changeQuesContent}
                />
                <div style={{ margin: '24px 0' }} />
                <Button 
                    style={{backgroundColor: '#87D068', borderRadius: '4px', color: '#fff'}} 
                    onClick={this.handleSaveQues}
                    >
                    发布问题
                </Button>
            </div>
        )
    }
}

export default connect(
    // 这里的state是这样的形式：
    // state: {
    //     editQues: {
    //         _id: ...,
    //         nickname: ...,
    //         ...
    //     }, // 管理员reducer
    // }
    state => ({ nickname: state.editQues.nickname}),
    {getUser, saveQuesAsync}
)(MdQues)
