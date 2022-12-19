import Button from './Button'
import classNames from 'classnames/bind'
import Container from './Container'
import Heading from './Heading'
import Paragraph from './Paragraph'
import styles from './Showcase.module.scss'

let cx = classNames.bind(styles);

const Showcase = ({
    backgroundImage = "/images/dishes.jpeg",
    btnLabel,
    description,
    halfHeight,
    title
}) => {
    let showcaseClasses = cx({
        showcase: true,
        'half-height': halfHeight
    })
    return <section 
    className={showcaseClasses}
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <Container>
            {title &&
                <Heading level="2" marginBottom="1">
                    {title}
                </Heading>
            }
            {description &&
                <Paragraph marginBottom="1">
                    {description}
                </Paragraph>
            }
            {btnLabel &&
                <Button label={btnLabel} path="#main"/>
            }
        </Container>
        </section>
}
export default Showcase