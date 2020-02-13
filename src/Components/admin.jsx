import React, { Component } from 'react'
import { Upload, message, Button, Icon, Form } from 'antd';
import FormBuilder from 'antd-form-builder'
import 'antd/dist/antd.css';
import './admin.css'
import axios from 'axios'

class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: false,
            type: "",
            ctype: [],
            wtype: [],
            form: this.props.form,
            gender: [],
            image: "",
            filename: ""
        }
    }

    URL= process.env.NODE_ENV === "development"?"http:localhost:3001":"/backend"

    componentDidMount() {
        const tctype = []
        const twtype = []
        const tgen = [] 
        
        fetch(this.URL+`/ctype`, {
            method: 'get'
        }).then(data => data.json())
            .then(data =>
                data.map(s => {
                    let inner = []
                    inner.push(s.id)
                    inner.push(s.typename)
                    tctype.push(inner)
                })
            )
        this.setState({ ctype: tctype })


        fetch(this.URL+"/wtype", {
            method: 'get'
        }).then(data => data.json())
            .then(data =>
                data.map(w => {
                    let inner = []
                    inner.push(w.id)
                    inner.push(w.typename)
                    twtype.push(inner)
                }))
        this.setState({ wtype: twtype })


        let outer = []
        fetch(this.URL+"/gender", {
            method: 'get'
        }).then(data => data.json())
            .then(data => {
                data.map(g => {
                    let inner = []
                    inner.push(g.id)
                    inner.push(g.type)
                    outer.push(inner)
                })
            }
            )
        this.setState({ gender: outer })
    }

    imageUpload = async () => {
        var name = ""
        var formData = new FormData()
        formData.append('profile',this.state.image)
        await axios.post(this.URL+"/profile", formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            }
        })
        .then(data=>{
            name = data.data.filename
        })
        this.setState({filename: name})
        return
    }

    handleProducts = () => {
        this.setState({ temp: !this.state.temp })
    }
    handleType = (event) => {
        this.setState({ type: event })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const temp = this.state.form.getFieldsValue()  
        await this.imageUpload()
        fetch(this.URL+"/submit", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: temp,
                file: this.URL+`/${this.state.filename}` 
            })
        })
        alert("Product added successfully")
        this.state.form.setFieldsValue({
            gender: '',
            type: '',
            stype: '',
            name: '',
            description: '',
            price: ''
        }) 
    }
    render() {
        const meta = {
            columns: 1,
            initialValues: null,
            formItemLayout: null,
            colan: false,
            gutter: 24,
            fields: [
                {
                    key: 'gender',
                    label: 'Gender',
                    widget: 'select',
                    options: this.state.gender,
                    required:true
                },
                {
                    key: 'type',
                    label: 'type',
                    widget: 'select',
                    options: ['Clothing', 'Watches'],
                    onChange: (event) => {
                        this.handleType(event)
                    },
                    required:true
                },
                {
                    key: 'stype',
                    label: `${this.state.type} type`,
                    widget: 'select',
                    disabled: (this.state.type === "") ? true : false,
                    options: (this.state.type === "Clothing") ? this.state.ctype : this.state.wtype,
                    required:true
                },
                {
                    key: 'name',
                    label: 'name',
                    required:true
                },
                {
                    key: 'description',
                    label: 'description',
                    required:true
                },
                {
                    key: 'price',
                    label: 'price',
                    required:true
                }
            ]
        }
        return (
            <div>
                <button className="products" onClick={() => this.handleProducts()}>Add Products</button>
                {(this.state.temp) ?
                    <div>
                        <Form layout="horizontal" onSubmit={this.handleSubmit}>
                            <FormBuilder form={this.props.form} meta={meta} />
                            <Form.Item wrapperCol={{ span: 16, offset: 1 }}>
                                <input type="file" className="file" onChange={(event)=>this.setState({image:event.target.files[0]})} required></input>
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 16, offset: 8 }} className="form-footer">
                                <Button htmlType="submit" type="primary">
                                    Submit
                            </Button>
                            </Form.Item>
                        </Form>
                    </div> :
                    null
                }
            </div>
        )
    }
}
export default Form.create()(admin)