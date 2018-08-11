import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            stars: 5,
            author: '',
            body: ''
        };
    }
    toggleForm() {
        let { isOpen } = this.state;
        isOpen = !isOpen;
        this.setState({ isOpen })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let review = {
            stars,
            author,
            body,
        };
        // validate...
        let { onSubmit } = this.props;
        onSubmit(review);
        this.toggleForm();
    }
    handleChange(e) {
        //console.log(e.target.id + ':' + e.target.value);
        let field = e.target.id;
        let value = e.target.value;
        this.setState({ [field]: value })
    }
    canSubmitForm() {
        let { stars } = this.state;
        if (stars < 3) return true;
        return false;
    }
    renderForm() {
        let { isOpen, stars, author, body } = this.state;
        if (!isOpen) {
            return (
                <button onClick={e => this.toggleForm()} className="btn btn-info">+</button>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-header bg-primary">Review Form</div>
                    <div className="card-body">
                        <form onSubmit={e => this.handleFormSubmit(e)}>
                            <div className="form-group">
                                <label>stars</label>
                                <select id="stars" value={stars} onChange={e => this.handleChange(e)} className="form-control" >
                                    {[1, 2, 3, 4, 5].map((n, idx) => <option value={n} key={n}>{n}</option>)}
                                </select>
                                <span style={{ color: 'red' }}>{stars < 3 ? 'give more stars' : ''}</span>
                            </div>
                            <div className="form-group">
                                <label>author</label>
                                <input id="author" value={author} onChange={e => this.handleChange(e)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>body</label>
                                <textarea id="body" value={body} onChange={e => this.handleChange(e)} className="form-control"></textarea>
                            </div>
                            <button disabled={this.canSubmitForm()} className="btn btn-dark">submit</button>&nbsp;
                            <button onClick={e => this.toggleForm()} className="btn btn-danger" type="button">cancel</button>
                        </form>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-8 col-sm-8 col-md-8">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;