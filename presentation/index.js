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
            <Link href="https://github.com/awayjs">Tessellations whatcha want</Link>
        </Heading>
        </Slide>
        <Slide bgImage={images.icycle1_tris}>
        </Slide>
        <Slide>
          <Heading size={2}>Dev setup with npm</Heading>
          <List>
            <ListItem>The <Code>awayjs-full</Code> module</ListItem>
            <ListItem>Creating npm links (by hand or with batch script)</ListItem>
            <ListItem>Linking <Code>awayjs-full</Code> module to an AwayJS project</ListItem>
            <ListItem>Using watchers to update modules</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Break</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Introduction to TypeScript</Heading>
          <Text>
            <Link href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">
              Typescript in 5 minutes
            </Link>
          </Text>
        </Slide>
        <CodeSlide textSize="20"
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/Rectangle.ts")}
            ranges={[
              { loc: [0, 572], title: "Rectangle.ts" },
              { loc: [0, 1], title: "ES6 import" },
              { loc: [46, 47], title: "Class definition" },
              { loc: [71, 72], title: "Property" },
              { loc: [105, 114], title: "Getter / Setter" },
              { loc: [363, 370], title: "Method with point arg"  },
              // ...
            ]}/>
        <CodeSlide textSize="20"
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/TextureAtlas.ts")}
            ranges={[
              { loc: [0, 140], title: "TextureAtlas.ts" },
              { loc: [0, 3], title: "imports from module dependencies" },
              { loc: [8, 11], title: "primitive object declarations" },
              { loc: [42, 43], title: "static keyword" },
              { loc: [76, 81], title: "constructor keyword" }
              // ...
            ]}/>
        <Slide>
          <Heading size={2} fit>Typescript tricks in VS Code</Heading>
          <List>
            <ListItem>Code hints from comments</ListItem>
            <ListItem>Jump to declaration</ListItem>
            <ListItem>Advanced intellisense</ListItem>
            <ListItem>Auto imports</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Lunch</Text>
        </Slide>
        <CodeSlide textSize="20"
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/Basic_View.ts")}
            ranges={[
              { loc: [0, 141], title: "typical boilerplate setup (Basic_View.ts)" },
              { loc: [38, 44], title: "imports using awayjs-full" },
              { loc: [64, 71], title: "init view and camera" },
              { loc: [72, 78], title: "add objects to the scene" },
              { loc: [78, 83], title: "add resize listener" },
              { loc: [128, 135], title: "add resize listener" },
              { loc: [84, 86], title: "setup RAF callback" },
              { loc: [96, 102], title: "setup RAF callback" },
              { loc: [87, 91], title: "load some assets" },
              { loc: [102, 123], title: "load some assets" }
              // ...
            ]}/>
        <Slide>
          <Heading size={2}>AwayJS basics</Heading>
          <List>
            <ListItem>Moving / rotating / scaling objects</ListItem>
            <ListItem>Mouse Events, Keyboard Events, Scene Events</ListItem>
            <ListItem>2D setup for loading AWDs / SWFs</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Break</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Stage Exploration</Heading>
          <Text>The <Code>Stage</Code> object wraps a single canvas</Text>
          <Text>GPU methods are exposed through the <Code>IContext</Code> interface.</Text>
          <Text>Stage abstractions hold asset properties unique to each stage</Text>
          <Text>🐙</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Renderer Exploration</Heading>
          <Text>The <Code>Renderer</Code> object wraps the <Code>Stage</Code></Text>
          <Text><Code>IRendererable</Code> objects are collected and rendered by the <Code>Renderer</Code></Text>
          <Text>The <Code>IRendererable</Code> abstraction holds all state data for rendering</Text>
          <Text>🐳</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Partition &amp; Traverser</Heading>
          <Text>A <Code>Traverser</Code> object is used to collect <Code>Entity</Code> objects from a <Code>Partition</Code></Text>
          <Text>Pertitions are created and managed by the <Code>View</Code>, and updated by the <Code>Scene</Code></Text>
          <Text>Both <Code>Renderer</Code> and <Code>RayCastPicker</Code> traverse partitions</Text>
          <Text>🐡</Text>
        </Slide>
        <Slide>
          <Text>Break</Text>
        </Slide>
        <Slide>
          <Heading size={2}>Freeform hour</Heading>
        </Slide>
        <Slide>
          <Text>End of day 1</Text>
        </Slide>
      </Deck>
    );
  }
}
