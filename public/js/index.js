/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

"use strict";

const localVideo = document.getElementById("local");
const recordedVideo = document.getElementById("recorded");
const startBtn = document.getElementById("start");
const recordBtn = document.getElementById("record");
const stopBtn = document.getElementById("stop");
const againBtn = document.getElementById("again");
const downloadBtn = document.getElementById("download");
let mediaRecorder;
let recordedBlobs;

function getLocalMediaStream(mediaStream) {
  recordBtn.disabled = false;//レコードボタンを有効にする
  const localStream = mediaStream;//getLocalMediaStreamで取得した映像をhtml側のvideo要素にする
  localVideo.srcObject = mediaStream;//html側のvideo要素にする
  window.stream = mediaStream;//録画用として取得した映像をwindow.streamに設定する
}

function handleLocalMediaStreamError(error) {//カメラの取得に失敗したときのエラー処理
  console.log(`navigator.getUserMedia error: ${error}`);
}

function handleDataAvailable(event) {
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

function startRecording() {
  recordedBlobs = [];
  const options = { mimeType: "video/webm;codecs=vp9" };//メディアレコーダーのオプションを設定する

  try {
    mediaRecorder = new MediaRecorder(window.stream, options);
  } catch (error) {
    console.log(`Exception while creating MediaRecorder: ${error}`);
    return;
  }

  mediaRecorder.onstop = event => {
    console.log("Recorder stopped: ", event);
  };

  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start(10);
  console.log("録画を開始しました", mediaRecorder);
}

function stopRecording() {
  mediaRecorder.stop();
  console.log("録画が完了しました");
}

function camera_on() { 
  const constraints = {
    video: {//カメラの解像度を設定
      width: 1280,
      height: 720
    }
  }

  navigator.mediaDevices
    .getUserMedia(constraints)//カメラの映像を取得
    .then(getLocalMediaStream)//取得した後にその取得したビデオをvideo要素にして、それを録画するようにする
    .then(startRecording)//録画の準備が出来たら録画を開始
    .catch(handleLocalMediaStreamError);//映像の取得に失敗したらエラー処理を行う
};

recordBtn.addEventListener("click", () => {
  if (recordBtn.textContent === "録画") {
    camera_on();
    startRecording();
  }
});

stopBtn.addEventListener("click", () => {
  stopRecording();
});

againBtn.addEventListener("click", () => {
  if (againBtn.textContent === "録り直す") {
    startRecording();
  }
});

downloadBtn.addEventListener("click", () => {
  const blob = new Blob(recordedBlobs, { type: "video/webm" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "rec.webm";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
});
