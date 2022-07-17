import React from 'react'

const AddQuestionForm = ({qNO}) => {
  return (
    <div className="question-container">
						<h2 className="question-header"> Add Question {qNO}</h2>
						<div className="input-container">
							<label htmlFor="question">Question</label>
							<input type="text" placeholder="Question" id="question" />
						</div>
						<div className="input-container">
							<label htmlFor="op1">Option 1</label>
							<input type="text" placeholder="Answer Choice" id="op1" />
						</div>
						<div className="input-container">
							<label htmlFor="op2">Option 2</label>
							<input type="text" placeholder="Answer Choice" id="op2" />
						</div>
						<div className="input-container">
							<label htmlFor="op3">Option 3</label>
							<input type="text" placeholder="Answer Choice" id="op3" />
						</div>
						<div className="input-container">
							<label htmlFor="op4">Option 4</label>
							<input type="text" placeholder="Answer Choice" id="op4" />
						</div>
						<div className="input-container">
							<label for="ans-sel">Choose correct Option</label>
							<select name="cars" id="ans-sel">
								<option value="1">Option 1</option>
								<option value="2">Option 2</option>
								<option value="3">Option 3</option>
								<option value="4">Option 4</option>
							</select>
						</div>
						<input className="btn button-next" value="Next" type="button" />
					</div>
  )
}

export default AddQuestionForm