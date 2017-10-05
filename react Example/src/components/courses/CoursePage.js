import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            course: {title: ''}
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave =  this.onClickSave.bind(this);
    }

    onTitleChange(e){
       
      const course = this.state.course;
         course.title = e.target.value;
         this.setState({course: course});
    }

    onClickSave(){
    this.props.actions.createCourse(this.state.course);
        
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;

    }


    render(){
     
        return(
            <div>
                <h1>Add Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <p>This is Course Page</p>
                <input type="text"  onChange={this.onTitleChange} value={this.state.course.title} />
                <button type="submit" onClick={this.onClickSave}>Click Me</button>
              
            </div>
        );
    }
}

CoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state){
 
  return{
    courses: state.courses
  };
    
}

function mapDispatchToProps(dispatch){
     return{
         actions: bindActionCreators(courseActions, dispatch)
     };
}

export default connect((mapStateToProps,mapDispatchToProps)(CoursePage));