import { Image, rem, Stack, Text } from "@mantine/core";
import React from "react";
import { WARNA } from "../fun/WARNA";

function LayoutLogin({children} : {children: React.ReactNode}) {
  return (
    <>
      <Stack gap={4} justify="center" align="center" pt={rem(50)}>
        <Image src={"/assets/image/logo.png"} alt="" w={103} h={103} />
        <Text fz={"sm"} fw={"bold"} c={WARNA.bgTombol}>Everything You Need In One Place</Text>
        {children}
    </Stack>
    </>
  );
}

export default LayoutLogin;
