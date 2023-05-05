import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  FormContainer,
  Label,
  Input,
  Button,
  Select,
  Options,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImageInput: '',
    topTextInput: '',
    bottomTextInput: '',
    optionId: fontSizesOptionsList[0].optionId,
    backgroundImage: '',
    topText: '',
    bottomText: '',
    selectedFontSize: '',
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      optionId,
    } = this.state
    this.setState({
      backgroundImage: backgroundImageInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      selectedFontSize: optionId,
    })
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOptionID = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {
      backgroundImage,
      topText,
      bottomText,
      optionId,
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      selectedFontSize,
    } = this.state
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            <MemeContainer data-testid="meme" backgroundImage={backgroundImage}>
              <TextContent selectedFontSize={selectedFontSize}>
                {topText}
              </TextContent>
              <TextContent selectedFontSize={selectedFontSize}>
                {bottomText}
              </TextContent>
            </MemeContainer>
            <FormContainer onSubmit={this.onGenerateMeme}>
              <Label htmlFor="backgroundImageUrl">Image URL</Label>
              <Input
                type="text"
                id="backgroundImageUrl"
                value={backgroundImageInput}
                placeholder="Enter the Image URL"
                onChange={this.onChangeBackgroundImage}
              />
              <Label htmlFor="topText">Top Text</Label>
              <Input
                type="text"
                id="topText"
                value={topTextInput}
                placeholder="Enter the Top Text"
                onChange={this.onChangeTopTextInput}
              />
              <Label htmlFor="bottomText">Bottom Text</Label>
              <Input
                type="text"
                id="bottomText"
                value={bottomTextInput}
                placeholder="Enter the Bottom Text"
                onChange={this.onChangeBottomTextInput}
              />
              <Label htmlFor="fontSize">Font Size</Label>
              <Select
                id="fontSize"
                value={optionId}
                onChange={this.onChangeOptionID}
              >
                {fontSizesOptionsList.map(eachOption => (
                  <Options
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                  >
                    {eachOption.displayText}
                  </Options>
                ))}
              </Select>
              <Button type="submit">Generate</Button>
            </FormContainer>
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
