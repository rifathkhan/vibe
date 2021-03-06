import React from 'react';
import { Link } from "react-router-dom";
import { Button, Container } from '../../globalStyles';
import { 
    InforSec, 
    InforRow, 
    InforColumn, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
} from './InforSection.elements';


const InforSection2 = ({
     lightBg, 
     imgStart, 
     lightTopLine, 
     lightTextDesc,
     buttonLabel, 
     description,
     headline, 
     lightText,
      topLine, 
      primary,
      img,
      alt,
      start
    }) => {
    return (
        <>
            <InforSec lightBg={ lightBg}>
                <Container>
                    <InforRow imgStart={imgStart}>
                        <InforColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc = {lightTextDesc}>{description}</Subtitle>
                                <Link to='/room'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InforColumn>
                        <InforColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InforColumn>
                    </InforRow>
                </Container>
            </InforSec>
        </>
    );
}

export default InforSection2;
