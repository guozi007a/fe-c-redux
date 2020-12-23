// 编辑发布面试分享的页面
import React, { Component } from 'react'
import { Input, Button } from 'antd'

const { TextArea } = Input

export default class MdInter extends Component {
    state = {
        interTittle: '', // 面试标题
        interContent: '', // 面试内容
    }
    // 写标题
    changeQuesTittle = (e) => {
        this.setState({
            interTittle: e.target.value 
        })
    }
    // 写内容
    changeQuesContent = (e) => {
        this.setState({
            interContent: e.target.value
        })
    }
    render() {
        return (
            <div style={{margin: '0 auto', width: '80%'}} >
                <div style={{ margin: '10px 0' }} />
                <Input 
                    placeholder="请输入标题，不超过100个字符"
                    style={{width: '50%'}}
                    maxLength={100}
                    onChange={this.changeInterTittle}
                />
                <div style={{ margin: '24px 0' }} />
                <TextArea 
                    // autoSize='true' // 自适应高度
                    autoSize={{ minRows: 15}} // 自适应高度设置最少15行
                    style={{width: '80%'}}
                    placeholder='请输入分享内容'
                    onChange={this.changeInterContent}
                />
                <div style={{ margin: '24px 0' }} />
                <Button 
                    style={{backgroundColor: '#87D068', borderRadius: '4px', color: '#fff'}} 
                    // onClick={this.handleSaveQues}
                    >
                    发布问题
                </Button>
            </div>
        )
    }
}
