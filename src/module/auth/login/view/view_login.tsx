'use client';
import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutLogin from '@/module/_global/layout/layout_login';
import { Box, Button, Stack, Text, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import toast from 'react-hot-toast';

function ViewLogin() {
  const textinfo = "Kami akan mengirimkan kode verifikasi melalui WhatsApp untuk mengkonfirmasi nomor anda";
  const router = useRouter();
  // const [isphone, setPhone] = useState('');
  // const [isloading, setLoading] = useState(false);

  // async function onLogin() {
  //   if (isphone == "") 
  //     return toast.error("Nomor Telepon Tidak Boleh Kosong")

  //   if (isphone.toString().length < 10)
  //     return toast.error("Nomor Telepon Harus 10 Digit")


  // }

  return (
    <Box>
      <LayoutLogin>
        <Stack pt={30}>
          <Box p={10}>
            <TextInput
              leftSection={<Text fz={"sm"} c={"dark"}>+62</Text>}
              placeholder='xxx xxx xxx'
              radius={"xl"}
              size='md'
              type='number'
              styles={{
                input: {
                  backgroundColor: "white",
                  border: "1px solid #7ABC00",
                  color: "dark",
                }
              }}
            />
              <Text mt={5} fw={"bold"} fz={"10"} c={WARNA.bgTombol}>{textinfo}</Text>
            <Box mt={30}>
              <Button onClick={() => router.push("/verifikasi")} radius={"xl"} c={"white"} fullWidth bg={WARNA.bgTombol}>Kirim</Button>
            </Box>
          </Box>
        </Stack>
      </LayoutLogin>
    </Box>
  );
}

export default ViewLogin;
