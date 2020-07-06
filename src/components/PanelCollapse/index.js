import React, {Component} from 'react';
import {TouchableHighlight, Animated, UIManager, LayoutAnimation, Platform} from 'react-native';
import { Content, Body, Title, ViewTitle} from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

class PanelCollapse extends Component {
  constructor(props){
    super(props);

    this.icons = {     //Step 2
        'up'    : <Icons name="keyboard-arrow-up" size={20} style={{lineHeight: 15}} color="#D37C38" />,
        'down'  : <Icons name="keyboard-arrow-down" size={20} style={{lineHeight: 15}} color="#D37C38" />               
    };

    this.state = {       //Step 3
        title       : props.title,
        expanded    : false
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  }
  
  render(){
    let icon = this.icons['down'];

    if(this.state.expanded){
        icon = this.icons['up'];   //Step 4
    }

    //Step 5
    return (
        <Content  >        
          <TouchableHighlight  
              onPress={this.changeLayout}
              underlayColor="#f1f1f1"
              style={{alignItems: "center", justifyContent: "center"}}>
              <ViewTitle>              
                <Title>{this.state.title}</Title>
                {icon}
              </ViewTitle>
          </TouchableHighlight>
          <Body style={{height: this.state.expanded ? null : 0, overflow: 'hidden'}}>
              {this.props.children}
          </Body>
        </Content>
      );
    }
  }
export default PanelCollapse;