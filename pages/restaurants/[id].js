import Col from '../../components/Col';
import Container from '../../components/Container';
import { Fragment } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout'
import MenuItem from '../../components/MenuItem';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Showcase from '../../components/Showcase'
import { getAllRestaurantSlugs, getSingleRestaurantBySlug } from "../../lib/api"
import Table from '../../components/Table';
import Button from '../../components/Button';

export async function getStaticPaths() {
    const restaurantSlugs = await getAllRestaurantSlugs();
    const paths = restaurantSlugs.map((restaurant) => {
        return {
            params: {
                id: restaurant.node.slug
            }
        }
    });
    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({params}) {
    const { id } = params;
    const restaurantData = await getSingleRestaurantBySlug(id);
    return {
        props: {
            restaurantData
        }, // will be passed to the page component as props
    }
}

const RestaurantPage = ({restaurantData}) => {
    const { title, excerpt, featuredImage, restaurantInformation } = restaurantData;
    const { location, contact, hours, menu } = restaurantInformation;
    const { streetAddress, city, state, zipCode } = location;
    const { phoneNumber, emailAddress } = contact;
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = hours;
    return <Layout>
        <Showcase 
            backgroundImage={featuredImage ? featuredImage.node.sourceUrl : null}
            halfHeight
        />
        <Container>
            <Row>
                <Col width="9">
                    <Heading level="1" marginBottom="1">{title}</Heading>
                    <Paragraph marginBottom="1">{excerpt}</Paragraph>
                    {menu.menuItems &&
                        <Fragment>
                            <Heading level="2" marginBottom="1">Menu</Heading>
                            {menu.menuItems.map((menuItemObj) => {
                                const {menuItem} = menuItemObj;
                                return <MenuItem data={menuItem} />
                            })}
                        </Fragment>
                    }
                </Col>
                <Col width="3">
                    <Button label='Order Takeout' marginBottom="1" marginRight="1"/>
                    <Button label='Make a Reservation' />
                        {streetAddress && city && state && zipCode &&
                            <Fragment>
                            <Heading level="2" marginBottom="1" marginTop="1">
                                Location
                            </Heading>
                            <Paragraph marginBottom="2">
                            {streetAddress}<br/>
                            {city}, {state} {zipCode}
                            </Paragraph>
                            </Fragment>
                        }                        {phoneNumber || emailAddress ?
                            <Fragment>
                                <Heading level="2" marginBottom="1">
                                    Contact
                                </Heading>
                                <Paragraph marginBottom="2">
                                {phoneNumber &&
                                    <Fragment>
                                        {phoneNumber}<br/>
                                    </Fragment> }
                                {emailAddress && 
                                    <a href={`mailto:${emailAddress}`}>
                                        {emailAddress}
                                    </a>}
                                </Paragraph>
                            </Fragment>
                        : ""}
                    <Heading level="2" marginBottom="1">Hours</Heading>
                    <Table data={hours} />
                </Col>
            </Row>
        </Container>
    </Layout>
}
export default RestaurantPage