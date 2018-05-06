// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Markdown,
  S,
  Appear,
  Table,
  TableItem,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableBody,
  Layout,
  Fill,
  Fit,
  CodePane,
  Code,
  Image,
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme

//import createTheme from "spectacle/lib/themes/default";
import createTheme from "spectacle-theme-nova";

import 'spectacle-theme-nova/syntax/prism.nova.css';
import 'spectacle-theme-nova/syntax/prism-typescript'

// Require CSS
require("normalize.css");

const theme = createTheme();

const inline = { display:'inline', margin:0 };
const gutter = '25px';
const images = {
  nyan: require('../assets/nyancat.gif'),
  background: require('../assets/Blue-Computer-Backgrounds2.jpg'),
  futurama: require('../assets/Futurama accomplish nothing-5482.png'),
  showreel1: require('../assets/showreel_2014-5270.png'),
  showreel2: require('../assets/433042501_1280x720-5261.jpg'),
  showreel3: require('../assets/darkorbit3d-5252.jpg'),
  showreel4: require('../assets/515686742_1280x720-5264.jpg'),
  showreel5: require('../assets/chess_game.png'),
  showreel6: require('../assets/heineken_game.png'),
  showreel7: require('../assets/elvenar-3D-battlefield-5258.jpg'),
  pepperflash: require('../assets/Pepper-Flash-Player-5447.jpg'),
  webgllogo: require('../assets/2000px-WebGL_Logo_light.svg.png'),
  typescriptlogo: require('../assets/uRLunzU-5492.png'),
  awayjslogo: require('../assets/awayjslogo-5276.png'),
  icycle1: require('../assets/pasted-image-1335.jpg'),
  icycle2: require('../assets/icycle_01-1397.png'),
  icycle3: require('../assets/icycle_02-1404.png'),
  dennis: require('../assets/Icycle2_AwayJS-1439.png'),
  dennis_tris: require('../assets/Icycle2_AwayJS-1439_tris.png'),
  icycle1_tris: require('../assets/Screenshot 2016-09-01 02.57.01-2343.png'),
  sunflower: require('../assets/sunflower.png'),
  sunflower_screenshot1: require('../assets/Screenshot 2018-02-27 11.41.47-5973.png'),
  sunflower_screenshot2: require('../assets/Screenshot 2018-02-27 11.43.39-5978.png'),
  sunflower_screenshot3: require('../assets/Screenshot 2018-02-27 11.48.42-5987.png'),
  mathswhizz: require('../assets/maths-whizz_with_cubes_on_top-6037.png'),
  mathswhizz_screenshot1: require('../assets/Screenshot 2018-02-27 11.59.12-6044.png'),
  mathswhizz_screenshot2: require('../assets/Screenshot 2018-02-27 12.00.02-6056.png'),
  mathswhizz_screenshot3: require('../assets/Screenshot 2018-02-27 12.00.54-6064.png'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgDarken='0.7' bgImage={images.background}>
          <Heading size={1} fit>Reanimating the Web</Heading>
          <Heading size={3}>
            <Link href="https://www.twitter.com/robnet">
              @robnet
            </Link>
          </Heading>
        </Slide>
        <Slide bgImage={images.futurama}>
        </Slide>
        <Slide bgImage={images.showreel1}>
        </Slide>
        <Slide bgImage={images.showreel2}>
        </Slide>
        <Slide bgImage={images.showreel3}>
        </Slide>
        <Slide bgImage={images.showreel4}>
        </Slide>
        <Slide bgImage={images.showreel5}>
        </Slide>
        <Slide bgImage={images.showreel6}>
        </Slide>
        <Slide bgImage={images.showreel7}>
        </Slide>
        <Slide bgImage={images.pepperflash}>
        </Slide>
        <Slide>
          <Image src={images.webgllogo}/>
        </Slide>
        <Slide bgImage={images.typescriptlogo}>
        </Slide>
        <Slide>
          <Image src={images.awayjslogo} height="300px"/>
          <Heading size={3} padding="20px">
            <Link href="https://github.com/awayjs">http://github.com/awayjs</Link>
          </Heading>
        </Slide>
        {/* <Slide>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>This is an item</TableItem>
                <TableItem>This too</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>This is the next item</TableItem>
                <TableItem>Seems like I am the last one...</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide> */}
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Heading size={1}>Vectors</Heading>
        </Slide>
        <Slide bgImage={images.icycle1}>
        </Slide>
        <Slide bgImage={images.icycle2}>
        </Slide>
        <Slide bgImage={images.icycle3}>
        </Slide>
        <Slide>
        <Layout>
          <Image src={images.dennis} height="500px"/>
          <Image src={images.dennis_tris} height="500px"/>
        </Layout>
        <Heading size={3} padding="20px">
            <Link href="../awayjs-examples-bin/AWD3ViewerMinimal.html">Tessellations whatcha want</Link>
        </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Heading size={1}>2D &amp; 3D</Heading>
        </Slide>
        <Slide>
          <Image src={images.sunflower} height="200px" padding="20px"/>
          <Layout>
            <Link href="../sprint_5/Mo.html" margin="30px"><Image src={images.sunflower_screenshot1} height="200px"/></Link>
            <Link href="../sprint_5/Fo.html" margin="30px"><Image src={images.sunflower_screenshot2} height="200px"/></Link>
            <Link href="../sprint_5/So.html" margin="30px"><Image src={images.sunflower_screenshot3} height="200px"/></Link>
          </Layout>
          <Heading size={3} padding="20px">
            <Link href="https://www.sunflowerlearning.com">http://www.sunflowerlearning.com/</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Heading size={1}>Imports &amp; Optimisation</Heading>
        </Slide>
        <Slide>
          <Image src={images.mathswhizz} height="200px" padding="20px"/>
          <Layout>
            <Link href="../mw_swf_bin/tests.html?folder=MWFirst10lessons&swf=1" margin="30px"><Image src={images.mathswhizz_screenshot1} height="200px"/></Link>
            <Link href="../mw_swf_bin/tests.html?folder=MWFirst10lessons&swf=5" margin="30px"><Image src={images.mathswhizz_screenshot2} height="200px"/></Link>
            <Link href="../mw_swf_bin/tests.html?folder=MWFirst10lessons&swf=8" margin="30px"><Image src={images.mathswhizz_screenshot3} height="200px"/></Link>
          </Layout>
          <Heading size={3} padding="20px">
            <Link href="https://www.whizz.com">http://www.whizz.com</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Heading size={1}>Future steps</Heading>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.background}>
          <Heading size={1}>Thank you</Heading>
          <Heading size={3}>
            <Link href="https://www.twitter.com/robnet">
              @robnet
            </Link>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
