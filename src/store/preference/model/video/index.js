export default {
  label: 'preferences.video.name',
  field: 'scrcpy',

  children: {
    videoSource: {
      hidden: true,
      label: 'preferences.video.video-source.name',
      field: '--video-source',
      type: 'Select',
      value: undefined,
      placeholder: 'preferences.video.video-source.placeholder',
      options: [
        {
          label: 'preferences.video.video-source.display',
          value: 'display',
        },
        {
          label: 'preferences.video.video-source.camera',
          value: 'camera',
        },
      ],
    },
    maxSize: {
      label: 'preferences.video.resolution.name',
      field: '--max-size',
      type: 'Input.number',
      value: undefined,
      placeholder: 'preferences.video.resolution.placeholder',
    },
    videoBitRate: {
      label: 'preferences.video.bit.name',
      field: '--video-bit-rate',
      type: 'Input.number',
      value: undefined,
      placeholder: 'preferences.video.bit.placeholder',
      append: 'kbps',
    },
    maxFps: {
      label: 'preferences.video.refresh-rate.name',
      field: '--max-fps',
      type: 'Input.number',
      value: undefined,
      placeholder: 'preferences.video.refresh-rate.placeholder',
      append: 'fps',
    },
    videoCode: {
      label: 'preferences.video.video-code.name',
      field: '--video-code',
      type: 'VideoCodecSelect',
      value: undefined,
      placeholder: 'preferences.video.video-code.placeholder',
      options: [
        {
          label: 'h264 & OMX.qcom.video.encoder.avc',
          value: 'h264 & OMX.qcom.video.encoder.avc',
        },
        {
          label: 'h264 & c2.android.avc.encoder',
          value: 'h264 & c2.android.avc.encoder',
        },
        {
          label: 'h264 & OMX.google.h264.encoder',
          value: 'h264 & OMX.google.h264.encoder',
        },
        {
          label: 'h265 & OMX.qcom.video.encoder.hevc',
          value: 'h265 & OMX.qcom.video.encoder.hevc',
        },
        {
          label: 'h265 & c2.android.hevc.encoder',
          value: 'h265 & c2.android.hevc.encoder',
        },
      ],
    },
    videoCodec: {
      hidden: true,
      field: '--video-codec',
      value: undefined,
    },
    videoEncoder: {
      hidden: true,
      field: '--video-encoder',
      value: undefined,
    },
    rotation: {
      label: 'preferences.video.screen-rotation.name',
      field: '--rotation',
      type: 'Select',
      value: undefined,
      placeholder: 'preferences.video.screen-rotation.placeholder',
      options: [
        { label: '0°', value: '0' },
        { label: '-90°', value: '1' },
        { label: '180°', value: '2' },
        { label: '90°', value: '3' },
      ],
    },
    crop: {
      label: 'preferences.video.screen-cropping.name',
      field: '--crop',
      type: 'Input',
      value: undefined,
      placeholder: 'preferences.video.screen-cropping.placeholder',
    },
    displayId: {
      label: 'preferences.video.display.name',
      field: '--display-id',
      type: 'DisplaySelect',
      value: undefined,
      placeholder: 'preferences.video.display.placeholder',
      options: [
        { label: '0', value: '0' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
      ],
      props: {
        filterable: true,
        allowCreate: true,
      },
    },
    displayBuffer: {
      label: 'preferences.video.video-buffer.name',
      field: '--display-buffer',
      type: 'Input.number',
      value: undefined,
      placeholder: 'preferences.video.video-buffer.placeholder',
      append: 'ms',
    },
    v4l2Buffer: {
      label: 'preferences.video.receiver-buffer.name',
      field: '--v4l2-buffer',
      type: 'Input.number',
      value: undefined,
      placeholder: 'preferences.video.receiver-buffer.placeholder',
      append: 'ms',
    },
  },
}
