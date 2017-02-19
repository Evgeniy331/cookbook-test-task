import React, { Component } from "react";

import "./inputs-list.css";

export default class InputsList extends Component {

	constructor(props) {
        super(props);
        this.addItemToList = this.addItemToList.bind(this);
        this.addInputField =  this.addInputField.bind(this);
        this.render =  this.render.bind(this);
    }
	
	render() {

	 	return (
	 		<div>
		 		<h4>{this.props.title}</h4>
			    <ul id={this.props.id} className="inputs-list clearfix">
			    </ul>
			    <span className="button add-button" onClick={this.addInputField}><i className="fa fa-plus"></i>Add {this.props.itemName}</span>
			    <div id={"input" + this.props.itemName + "-tmp"}>
				</div>
	 	   </div>
	 	);

	}

	componentDidMount() {

		let values = this.props.values;

		if (!values)
			values = [];

		if (values.length > 0) 
			for (let i = 0; i < values.length; i++) 
				this.addItemToList(values[i]);
	}

	addItemToList(value) {

		let ul = document.querySelector("#" + this.props.id);
		let li = document.createElement("li");
		let input = document.createElement("input");
		input.value = value;
		input.setAttribute("readonly", "readonly");

		let editBtn = document.createElement("button");
		editBtn.classList.add("edit-button");
		editBtn.innerHTML = "<i class='fa fa-pencil-square-o'></i>";

		let removeBtn = document.createElement("button");
		removeBtn.classList.add("remove-button");
		removeBtn.innerHTML = "<i class='fa fa-times'></i>";

		li.appendChild(input);
		li.appendChild(editBtn);
		li.appendChild(removeBtn);
		ul.appendChild(li);

		removeBtn.onclick = function() {
			ul.removeChild(li);
		}

		input.addEventListener("focusout", function(event) {

			if (!input.hasAttribute("readonly")) {

				input.setAttribute("readonly", "readonly");
				editBtn.classList.remove("success-button");
				editBtn.classList.add("edit-button");
				editBtn.innerHTML = "<i class='fa fa-pencil-square-o'></i>";

				//because we have conflict of events focusout input and click on editBtn
				editBtn.removeEventListener("click", editBtnClickListener);
				setTimeout(function() { editBtn.addEventListener("click", editBtnClickListener); }, 100);
			}
			
		});

		let editBtnClickListener = function(event) {
			
			if (editBtn.classList.contains("edit-button")) {

				input.removeAttribute("readonly");
				input.focus();
				editBtn.classList.remove("edit-button");
				editBtn.classList.add("success-button");
				editBtn.innerHTML = "<i class='fa fa-check'></i>";
			}

		}

		editBtn.addEventListener("click", editBtnClickListener);
		
		input.onkeydown = function(e) {
			
			if (e.code === "Enter") {
				input.setAttribute("readonly", "readonly");
				editBtn.classList.remove("success-button");
				editBtn.classList.add("edit-button");
				editBtn.innerHTML = "<i class='fa fa-pencil-square-o'></i>";
			}

		}

	}

	addInputField() {
		
		let div = document.querySelector("#input" + this.props.itemName + "-tmp");
		div.innerHTML = "";

		let input = document.createElement("input");
		input.placeholder = "Enter " + this.props.itemName;
		
		const that = this;
		
		input.addEventListener("keydown", function(e) {

			if (e.code === "Enter") {
				if (e.target.value.length > 3 && e.target.value.length < 15){
					that.addItemToList(e.target.value);
					div.innerHTML = "";
				}
			}
		});

		input.addEventListener("focusout", function() {
			div.innerHTML = "";
		});

		div.appendChild(input);
		input.focus();

	}

}