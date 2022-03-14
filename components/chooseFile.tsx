import { useState, useEffect } from "react";
import { Box, ListItem, Heading, Text, List, Button } from "@chakra-ui/react";
import Break from "./break";
import { ILoadedFile } from "../pages";

const Component = ({
  setLoadedFile,
  loadedFile,
}: {
  loadedFile: ILoadedFile;
  setLoadedFile: any;
}) => {
  const [opacity, setOpacity] = useState(0);
  const [opacity2, setOpacity2] = useState(1);
  const [opacity3, setOpacity3] = useState(0);
  const [editClass, setClassName] = useState(true);
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 2000);
    setTimeout(() => {
      setClassName(false);
      setOpacity3(1);

      setTimeout(() => {}, 1000);
    }, 5000);
  }, []);
  return (
    <Box
      opacity={opacity2}
      margin="auto"
      className="drag mainOverlay"
      zIndex={1}
      position={"absolute"}
      w={"100vw"}
      h={"100vh"}
      backgroundColor={"#19282a"}
      display={display}
    >
      <Heading
        opacity={opacity}
        className="initialTitle no-select"
        color={"#e6dc51"}
        textAlign={"center"}
        verticalAlign={"center"}
      >
        Blur
      </Heading>
      <Text
        opacity={opacity}
        className="initialDesc no-select"
        color={"#FFFFEA"}
        textAlign={"center"}
        verticalAlign={"center"}
      >
        A powerful lightweight text editor.
      </Text>

      <Box textAlign={"center"}>
        <Break amount={85}></Break>
        <List>
          <ListItem>
            <Button
              opacity={opacity3}
              backgroundColor={"transparent !important"}
              background={"transparent !important"}
              onClick={() => {
                window.electron.invoke("new-file").then((res) => {
                  setLoadedFile({
                    path: res.path,
                    data: "",
                  });
                });
              }}
              className={`btn no-drag no-select initialDesc ${
                editClass ? "hidden" : "shown"
              }`}
            >
              New File...
            </Button>
          </ListItem>
          <ListItem>
            <Button
              opacity={opacity3}
              backgroundColor={"transparent !important"}
              background={"transparent !important"}
              onClick={() => {
                window.electron.invoke("open-file").then((res) => {
                  setLoadedFile(res);
                });
              }}
              className={`btn no-drag no-select initialDesc ${
                editClass ? "hidden" : "shown"
              }`}
            >
              Open File...
            </Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Component;
