import { Box, Flex, Button, Heading, Text, Input } from "@chakra-ui/react";
// import {
//   CopyBlock,
//   dracula,
//   Code,
//   monokai,
//   github,
//   vs2015,
//   CodeBlock,
// } from "react-code-blocks";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
// import { MoonIcon, SunIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { AiOutlineBold } from "@react-icons/all-files/ai/AiOutlineBold"; //make text bold
import { AiOutlineItalic } from "@react-icons/all-files/ai/AiOutlineItalic"; //make text italics
import { AiOutlineUnderline } from "@react-icons/all-files/ai/AiOutlineUnderline"; //underline text
import { AiOutlineAlignCenter } from "@react-icons/all-files/ai/AiOutlineAlignCenter"; //align text center
import { AiOutlineAlignLeft } from "@react-icons/all-files/ai/AiOutlineAlignLeft"; //align text left
import { AiOutlineAlignRight } from "@react-icons/all-files/ai/AiOutlineAlignRight"; //align text right
import { AiOutlineCopy } from "@react-icons/all-files/ai/AiOutlineCopy"; //copy text
import { AiOutlineHighlight } from "@react-icons/all-files/ai/AiOutlineHighlight"; //highlight text
import { AiOutlineFontColors } from "@react-icons/all-files/ai/AiOutlineFontColors"; //change text color
import { AiOutlineFontSize } from "@react-icons/all-files/ai/AiOutlineFontSize"; //change text size
import { AiOutlineCompass } from "@react-icons/all-files/ai/AiOutlineCompass"; //search text
import { AiOutlineUndo } from "@react-icons/all-files/ai/AiOutlineUndo"; //undo
import { AiOutlineRedo } from "@react-icons/all-files/ai/AiOutlineRedo"; //redo
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser"; //user
import { AiOutlineSetting } from "@react-icons/all-files/ai/AiOutlineSetting"; //settings
import { AiOutlineSave } from "@react-icons/all-files/ai/AiOutlineSave"; //save
import { AiOutlineFolder } from "@react-icons/all-files/ai/AiOutlineFolder"; //open file
import { AiOutlineNotification } from "@react-icons/all-files/ai/AiOutlineNotification"; //changelog
import { AiOutlineFile } from "@react-icons/all-files/ai/AiOutlineFile"; //export file
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete"; //delete file
import { AiOutlineBug } from "@react-icons/all-files/ai/AiOutlineBug"; //bug report
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle"; //close app
import { AiOutlineMinusCircle } from "@react-icons/all-files/ai/AiOutlineMinusCircle"; //close app
import Component from "../components/chooseFile";

export interface ILoadedFile {
  path?: string;
  data?: string;
}

const Nav: NextPage = () => {
  const [loadedFile, setLoadedFile] = useState<ILoadedFile>({});
  return (
    <>
      <Box>
        {JSON.stringify(loadedFile) === "{}" && (
          <Component
            loadedFile={loadedFile}
            setLoadedFile={(obj: any) => {
              setLoadedFile(obj);
            }}
          />
        )}

        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"50px"}
        >
          <Box
            overflowX={"hidden"}
            overflowY={"auto"}
            h={"95vh"}
            w={"24vw"}
            bg="#478594 "
          >
            <Heading
              color={"#e6dc51"}
              textAlign={"center"}
              verticalAlign={"center"}
              className="tabTitle no-select"
            >
              Blur
            </Heading>
            <Text
              color={"#FFFFEA"}
              textAlign={"center"}
              verticalAlign={"center"}
              fontSize={"3vh"}
              className="no-select"
            >
              Open a tab to get started.
            </Text>
          </Box>

          <Box overflowY={"auto"} h={"95vh"} w={"76vw"} bg="#549BAD">
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Box className={"drag"} bg={"#3c6f7c"} h={"5vh"} w={"70vw"}>
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Text
                    className="no-drag-title editor no-select"
                    h={"3vh"}
                    textAlign={"center"}
                  >
                    index.txt - Blur
                  </Text>
                </Flex>
              </Box>

              <Box className={"drag"} bg={"#3c6f7c"} h={"5vh"} w={"6vw"}>
                <Flex justifyContent={"right"} alignItems={"right"}>
                  <Button
                    onClick={() => window.electron.send("minimize-app")}
                    className="no-drag"
                    textAlign={"center"}
                    as={AiOutlineMinusCircle}
                    w={"3vw"}
                    h={"5vh"}
                    size={"0px"}
                    color="#7fb1bf"
                  />
                  <Button
                    onClick={() => window.electron.send("close-app")}
                    className="no-drag"
                    textAlign={"right"}
                    as={AiOutlineCloseCircle}
                    w={"3vw"}
                    h={"5vh"}
                    size={"0px"}
                    color="#7fb1bf"
                  />
                </Flex>
              </Box>
            </Flex>

            <Box>
              {[].map((item: string, index: number) => (
                <>
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    <Text>{index + 1}</Text>
                    <Input
                      onChange={() => console.log("changed")}
                      value={item}
                    />
                  </Flex>
                </>
              ))}
            </Box>
          </Box>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box bg={"#3c6f7c"} h={"5vh"} w={"25vw"}>
            <Flex justifyContent={"left"} alignItems={"left"}>
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineSetting}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineUser}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineSave}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineFolder}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineNotification}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineFile}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineDelete}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineBug}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
            </Flex>
          </Box>

          <Box bg={"#3c6f7c"} h={"5vh"} w={"75vw"}>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineBold}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineItalic}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineUnderline}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineAlignLeft}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineAlignCenter}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineAlignRight}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineCopy}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineUndo}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineRedo}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineFontColors}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineFontSize}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineHighlight}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
              <Button
                className="no-drag"
                textAlign={"center"}
                as={AiOutlineCompass}
                w={"3vw"}
                h={"5vh"}
                size={"0px"}
                color="#7fb1bf"
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
