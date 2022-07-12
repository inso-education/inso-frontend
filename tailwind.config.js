module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: false,

  theme: {
    fontFamily: {
      poppins: ["Poppins", "san-serif"],
    },
    fontSize: {
      xs: ["1.2rem"],
      sm: ["1.4rem"],
      md: ["1.6rem"],
      lg: ["1.8rem"],
      xl: ["2rem"],
      "2xl": ["2.4rem"],
      "3xl": ["3rem"],
      "3.2xl": ["3.2rem"],
      "5xl": ["3.2rem", "5rem"],
      "5.6xl": ["5.6rem"],
    },
    borderRadius: {
      DEFAULT: "30px",
      md: "20px",
      sm: "10px",
      xs: "6px",
      lg: "8px",
      xl: "15px",
      full: "100%",
      none: "0px",
    },
    colors: {
      transparent: "transparent",
      primary: {
        darkGreen: "#01C1B7",
        blue: "#0EB4F6",
      },

      white: {
        white: "#FFFFFF",
      },
      blue: {
        lightBlue: "#ECF4F4",
        inputBlue: " #F2FAFF",
        progressBlue: " #E9EFF7",
        postInsp: "rgba(231, 247, 254, 1)",
      },
      green: {
        lightGreen: "#F3FAFA",
        lighterGreen: "rgba(243, 250, 250, 1)",
        doneBg: "#EDFBED",
      },
      gray: {
        text: "#686868",
        background: "#FAFAFA",
        illustrationText: "#939393",
        faintGray: "#9D9D9D",
        footerGrey: "#FCFCFC",
        labelGrey: " #8692A6",
        createDisc: "#F9F9F9",
        analyticsGray: "#BBBBBB",
        notificationBg: "#CBCBCB",
      },
      black: {
        darkPretzl: "#001E2F",
        analText: "#2E2E2E",
        postInsp: "#001312",
      },
      other: {
        danger: " #E84949",
        overlay: "rgba(255, 255, 255,0.2)",
        disabled: "#F0F0F0",
        disabledText: "#C1C1C1",
        faintBlue: " #DAF2FF",
        success: " #04BE00",
        lightRed: "#FFF5F5",
      },
      border: {
        green: "rgba(144, 215, 255, 0.1)",
        line: "#0EB4F6",
        dropdownLine: "#C5C5C5",
        settingsLine: "rgba(7, 160, 152, 0.05)",
      },
    },
    placeholderColor: {
      primary: {
        grey: "#8692A6",
        placeholder: "rgba(0, 30, 47, 0.2)",
      },
    },

    boxShadow: {
      xs: "1px 2px 10px rgba(0, 0, 0, 0.08)",
      sm: "0px 1px 4px rgba(0, 0, 0, 0.15)",
      md: "0px 8px 12px 0px rgba(46, 41, 78, 0.08)",
      lg: "0px 7px 15px 0px rgba(169, 169, 169, 0.12)",
      "plan-Shadow": "0px 2.48511px 100px 20px rgba(62, 54, 54, 0.13)",
      createDiscussion: "0px 4px 21px rgba(182, 182, 182, 0.26)",
      none: "0 0 #0000",
    },
    screens: {
      "vp-1366": { max: "1366px" },
      "vp-1200": { max: "1200px" },
      "vp-1024": { max: "1024px" },
      "vp-1023": { max: "1023px" },
      "vp-980": { max: "980px" },
      "vp-900": { max: "900px" },
      "vp-800": { max: "800px" },
      "vp-768": { max: "768px" },
      "vp-600": { max: "600px" },
      "vp-min-1440": "1440px",
      "vp-min-1024": "1024px",
      "vp-min-601": "601px",
      "vp-min-769": "769px",
    },

    margin: {
      auto: "auto",
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "1rem",
      11: "1.1rem",
      12: "1.2rem",
      13: "1.3rem",
      14: "1.4rem",
      15: "1.5rem",
      16: "1.6rem",
      17: "1.7rem",
      18: "1.8rem",
      19: "1.9rem",
      20: "2rem",
      21: "2.1rem",
      22: "2.2rem",
      23: "2.3rem",
      24: "2.4rem",
      25: "2.5rem",
      26: "2.6rem",
      27: "2.7rem",
      28: "2.8rem",
      29: "2.9rem",
      30: "3rem",
      31: "3.1rem",
      32: "3.2rem",
      33: "3.3rem",
      34: "3.4rem",
      35: "3.5rem",
      36: "3.6rem",
      37: "3.7rem",
      38: "3.8rem",
      39: "3.9rem",
      40: "4rem",
      41: "4.1rem",
      42: "4.2rem",
      43: "4.3rem",
      44: "4.4rem",
      45: "4.5rem",
      46: "4.6rem",
      47: "4.7rem",
      48: "4.8rem",
      49: "4.9rem",
      50: "5rem",
      51: "5.1rem",
      52: "5.2rem",
      53: "5.3rem",
      54: "5.4rem",
      55: "5.5rem",
      56: "5.6rem",
      57: "5.7rem",
      58: "5.8rem",
      59: "5.9rem",
      60: "6rem",
      61: "6.1rem",
      62: "6.2rem",
      63: "6.3rem",
      64: "6.4rem",
      65: "6.5rem",
      66: "6.6rem",
      67: "6.7rem",
      68: "6.8rem",
      69: "6.9rem",
      70: "7rem",
      71: "7.1rem",
      72: "7.2rem",
      73: "7.3rem",
      74: "7.4rem",
      75: "7.5rem",
      76: "7.6rem",
      77: "7.7rem",
      78: "7.8rem",
      79: "7.9rem",
      80: "8rem",
      81: "8.1rem",
      82: "8.2rem",
      83: "8.3rem",
      84: "8.4rem",
      85: "8.5rem",
      86: "8.6rem",
      87: "8.7rem",
      88: "8.8rem",
      89: "8.9rem",
      90: "9rem",
      91: "9.1rem",
      92: "9.2rem",
      93: "9.3rem",
      94: "9.4rem",
      95: "9.5rem",
      96: "9.6rem",
      97: "9.7rem",
      98: "9.8rem",
      99: "9.9rem",
      100: "10rem",
      101: "10.1rem",
      102: "10.2rem",
      103: "10.3rem",
      104: "10.4rem",
      105: "10.5rem",
      106: "10.6rem",
      107: "10.7rem",
      108: "10.8rem",
      109: "10.9rem",
      110: "11rem",
      111: "11.1rem",
      112: "11.2rem",
      113: "11.3rem",
      114: "11.4rem",
      115: "11.5rem",
      116: "11.6rem",
      117: "11.7rem",
      118: "11.8rem",
      119: "11.9rem",
      120: "12rem",
      121: "12.1rem",
      122: "12.2rem",
      123: "12.3rem",
      124: "12.4rem",
      125: "12.5rem",
      126: "12.6rem",
      127: "12.7rem",
      128: "12.8rem",
      129: "12.9rem",
      130: "13rem",
      131: "13.1rem",
      132: "13.2rem",
      133: "13.3rem",
      134: "13.4rem",
      135: "13.5rem",
      136: "13.6rem",
      137: "13.7rem",
      138: "13.8rem",
      139: "13.9rem",
      140: "14rem",
      141: "14.1rem",
      142: "14.2rem",
      143: "14.3rem",
      144: "14.4rem",
      145: "14.5rem",
      146: "14.6rem",
      147: "14.7rem",
      148: "14.8rem",
      149: "14.9rem",
      150: "15rem",
      151: "15.1rem",
      152: "15.2rem",
      153: "15.3rem",
      154: "15.4rem",
      155: "15.5rem",
      156: "15.6rem",
      157: "15.7rem",
      158: "15.8rem",
      159: "15.9rem",
      160: "16rem",
      161: "16.1rem",
      162: "16.2rem",
      163: "16.3rem",
      164: "16.4rem",
      165: "16.5rem",
      166: "16.6rem",
      167: "16.7rem",
      168: "16.8rem",
      169: "16.9rem",
      170: "17rem",
      171: "17.1rem",
      172: "17.2rem",
      173: "17.3rem",
      174: "17.4rem",
      175: "17.5rem",
      176: "17.6rem",
      177: "17.7rem",
      178: "17.8rem",
      179: "17.9rem",
      180: "18rem",
      181: "18.1rem",
      182: "18.2rem",
      183: "18.3rem",
      184: "18.4rem",
      185: "18.5rem",
      186: "18.6rem",
      187: "18.7rem",
      188: "18.8rem",
      189: "18.9rem",
      190: "19rem",
      191: "19.1rem",
      192: "19.2rem",
      193: "19.3rem",
      194: "19.4rem",
      195: "19.5rem",
      196: "19.6rem",
      197: "19.7rem",
      198: "19.8rem",
      199: "19.9rem",
      200: "20rem",
      255: "25.5rem",
    },
    padding: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "1rem",
      11: "1.1rem",
      12: "1.2rem",
      13: "1.3rem",
      14: "1.4rem",
      15: "1.5rem",
      16: "1.6rem",
      17: "1.7rem",
      18: "1.8rem",
      19: "1.9rem",
      20: "2rem",
      21: "2.1rem",
      22: "2.2rem",
      23: "2.3rem",
      24: "2.4rem",
      25: "2.5rem",
      26: "2.6rem",
      27: "2.7rem",
      28: "2.8rem",
      29: "2.9rem",
      30: "3rem",
      31: "3.1rem",
      32: "3.2rem",
      33: "3.3rem",
      34: "3.4rem",
      35: "3.5rem",
      36: "3.6rem",
      37: "3.7rem",
      38: "3.8rem",
      39: "3.9rem",
      40: "4rem",
      41: "4.1rem",
      42: "4.2rem",
      43: "4.3rem",
      44: "4.4rem",
      45: "4.5rem",
      46: "4.6rem",
      47: "4.7rem",
      48: "4.8rem",
      49: "4.9rem",
      50: "5rem",
      51: "5.1rem",
      52: "5.2rem",
      53: "5.3rem",
      54: "5.4rem",
      55: "5.5rem",
      56: "5.6rem",
      57: "5.7rem",
      58: "5.8rem",
      59: "5.9rem",
      60: "6rem",
      61: "6.1rem",
      62: "6.2rem",
      63: "6.3rem",
      64: "6.4rem",
      65: "6.5rem",
      66: "6.6rem",
      67: "6.7rem",
      68: "6.8rem",
      69: "6.9rem",
      70: "7rem",
      71: "7.1rem",
      72: "7.2rem",
      73: "7.3rem",
      74: "7.4rem",
      75: "7.5rem",
      76: "7.6rem",
      77: "7.7rem",
      78: "7.8rem",
      79: "7.9rem",
      80: "8rem",
      81: "8.1rem",
      82: "8.2rem",
      83: "8.3rem",
      84: "8.4rem",
      85: "8.5rem",
      86: "8.6rem",
      87: "8.7rem",
      88: "8.8rem",
      89: "8.9rem",
      90: "9rem",
      91: "9.1rem",
      92: "9.2rem",
      93: "9.3rem",
      94: "9.4rem",
      95: "9.5rem",
      96: "9.6rem",
      97: "9.7rem",
      98: "9.8rem",
      99: "9.9rem",
      100: "10rem",
      101: "10.1rem",
      102: "10.2rem",
      103: "10.3rem",
      104: "10.4rem",
      105: "10.5rem",
      106: "10.6rem",
      107: "10.7rem",
      108: "10.8rem",
      109: "10.9rem",
      110: "11rem",
      111: "11.1rem",
      112: "11.2rem",
      113: "11.3rem",
      114: "11.4rem",
      115: "11.5rem",
      116: "11.6rem",
      117: "11.7rem",
      118: "11.8rem",
      119: "11.9rem",
      120: "12rem",
      121: "12.1rem",
      122: "12.2rem",
      123: "12.3rem",
      124: "12.4rem",
      125: "12.5rem",
      126: "12.6rem",
      127: "12.7rem",
      128: "12.8rem",
      129: "12.9rem",
      130: "13rem",
      131: "13.1rem",
      132: "13.2rem",
      133: "13.3rem",
      134: "13.4rem",
      135: "13.5rem",
      136: "13.6rem",
      137: "13.7rem",
      138: "13.8rem",
      139: "13.9rem",
      140: "14rem",
      141: "14.1rem",
      142: "14.2rem",
      143: "14.3rem",
      144: "14.4rem",
      145: "14.5rem",
      146: "14.6rem",
      147: "14.7rem",
      148: "14.8rem",
      149: "14.9rem",
      150: "15rem",
      151: "15.1rem",
      152: "15.2rem",
      153: "15.3rem",
      154: "15.4rem",
      155: "15.5rem",
      156: "15.6rem",
      157: "15.7rem",
      158: "15.8rem",
      159: "15.9rem",
      160: "16rem",
      161: "16.1rem",
      162: "16.2rem",
      163: "16.3rem",
      164: "16.4rem",
      165: "16.5rem",
      166: "16.6rem",
      167: "16.7rem",
      168: "16.8rem",
      169: "16.9rem",
      170: "17rem",
      171: "17.1rem",
      172: "17.2rem",
      173: "17.3rem",
      174: "17.4rem",
      175: "17.5rem",
      176: "17.6rem",
      177: "17.7rem",
      178: "17.8rem",
      179: "17.9rem",
      180: "18rem",
      181: "18.1rem",
      182: "18.2rem",
      183: "18.3rem",
      184: "18.4rem",
      185: "18.5rem",
      186: "18.6rem",
      187: "18.7rem",
      188: "18.8rem",
      189: "18.9rem",
      190: "19rem",
      191: "19.1rem",
      192: "19.2rem",
      193: "19.3rem",
      194: "19.4rem",
      195: "19.5rem",
      196: "19.6rem",
      197: "19.7rem",
      198: "19.8rem",
      199: "19.9rem",
      200: "20rem",
    },
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.3 },
          "100%": { opacity: 1 },
        },
      },

      animation: {
        "fade-in": "fade-in 300ms ease-out",
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999,
      },
      width: {
        fit: "fit-content",
        min: "min-content",
        max: "max-content",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "1rem",
        11: "1.1rem",
        12: "1.2rem",
        13: "1.3rem",
        14: "1.4rem",
        15: "1.5rem",
        16: "1.6rem",
        17: "1.7rem",
        18: "1.8rem",
        19: "1.9rem",
        20: "2rem",
        21: "2.1rem",
        22: "2.2rem",
        23: "2.3rem",
        24: "2.4rem",
        25: "2.5rem",
        26: "2.6rem",
        27: "2.7rem",
        28: "2.8rem",
        29: "2.9rem",
        30: "3rem",
        31: "3.1rem",
        32: "3.2rem",
        33: "3.3rem",
        34: "3.4rem",
        35: "3.5rem",
        36: "3.6rem",
        37: "3.7rem",
        38: "3.8rem",
        39: "3.9rem",
        40: "4rem",
        41: "4.1rem",
        42: "4.2rem",
        43: "4.3rem",
        44: "4.4rem",
        45: "4.5rem",
        46: "4.6rem",
        47: "4.7rem",
        48: "4.8rem",
        49: "4.9rem",
        50: "5rem",
        51: "5.1rem",
        52: "5.2rem",
        53: "5.3rem",
        54: "5.4rem",
        55: "5.5rem",
        56: "5.6rem",
        57: "5.7rem",
        58: "5.8rem",
        59: "5.9rem",
        60: "6rem",
        61: "6.1rem",
        62: "6.2rem",
        63: "6.3rem",
        64: "6.4rem",
        65: "6.5rem",
        66: "6.6rem",
        67: "6.7rem",
        68: "6.8rem",
        69: "6.9rem",
        70: "7rem",
        71: "7.1rem",
        72: "7.2rem",
        73: "7.3rem",
        74: "7.4rem",
        75: "7.5rem",
        76: "7.6rem",
        77: "7.7rem",
        78: "7.8rem",
        79: "7.9rem",
        80: "8rem",
        81: "8.1rem",
        82: "8.2rem",
        83: "8.3rem",
        84: "8.4rem",
        85: "8.5rem",
        86: "8.6rem",
        87: "8.7rem",
        88: "8.8rem",
        89: "8.9rem",
        90: "9rem",
        91: "9.1rem",
        92: "9.2rem",
        93: "9.3rem",
        94: "9.4rem",
        95: "9.5rem",
        96: "9.6rem",
        97: "9.7rem",
        98: "9.8rem",
        99: "9.9rem",
        100: "10rem",
        101: "10.1rem",
        102: "10.2rem",
        103: "10.3rem",
        104: "10.4rem",
        105: "10.5rem",
        106: "10.6rem",
        107: "10.7rem",
        108: "10.8rem",
        109: "10.9rem",
        110: "11rem",
        111: "11.1rem",
        112: "11.2rem",
        113: "11.3rem",
        114: "11.4rem",
        115: "11.5rem",
        116: "11.6rem",
        117: "11.7rem",
        118: "11.8rem",
        119: "11.9rem",
        120: "12rem",
        121: "12.1rem",
        122: "12.2rem",
        123: "12.3rem",
        124: "12.4rem",
        125: "12.5rem",
        126: "12.6rem",
        127: "12.7rem",
        128: "12.8rem",
        129: "12.9rem",
        130: "13rem",
        131: "13.1rem",
        132: "13.2rem",
        133: "13.3rem",
        134: "13.4rem",
        135: "13.5rem",
        136: "13.6rem",
        137: "13.7rem",
        138: "13.8rem",
        139: "13.9rem",
        140: "14rem",
        141: "14.1rem",
        142: "14.2rem",
        143: "14.3rem",
        144: "14.4rem",
        145: "14.5rem",
        146: "14.6rem",
        147: "14.7rem",
        148: "14.8rem",
        149: "14.9rem",
        150: "15rem",
        151: "15.1rem",
        152: "15.2rem",
        153: "15.3rem",
        154: "15.4rem",
        155: "15.5rem",
        156: "15.6rem",
        157: "15.7rem",
        158: "15.8rem",
        159: "15.9rem",
        160: "16rem",
        161: "16.1rem",
        162: "16.2rem",
        163: "16.3rem",
        164: "16.4rem",
        165: "16.5rem",
        166: "16.6rem",
        167: "16.7rem",
        168: "16.8rem",
        169: "16.9rem",
        170: "17rem",
        171: "17.1rem",
        172: "17.2rem",
        173: "17.3rem",
        174: "17.4rem",
        175: "17.5rem",
        176: "17.6rem",
        177: "17.7rem",
        178: "17.8rem",
        179: "17.9rem",
        180: "18rem",
        181: "18.1rem",
        182: "18.2rem",
        183: "18.3rem",
        184: "18.4rem",
        185: "18.5rem",
        186: "18.6rem",
        187: "18.7rem",
        188: "18.8rem",
        189: "18.9rem",
        190: "19rem",
        191: "19.1rem",
        192: "19.2rem",
        193: "19.3rem",
        194: "19.4rem",
        195: "19.5rem",
        196: "19.6rem",
        197: "19.7rem",
        198: "19.8rem",
        199: "19.9rem",
        200: "20rem",
        203: "20.3rem",
        205: "20.5rem",
        210: "21rem",
        230: "23rem",
        252: "25.2rem",
        259: "25.9rem",
        262: "26.2rem",
        260: "26rem",
        280: "28rem",
        300: "30rem",
        311: "31.1rem",
        319: "31.9rem",
        320: "32rem",
        333: "33.3rem",
        384: "38.4rem",
        400: "40rem",
        350: "35rem",
        414: "41.4rem",
        460: "46rem",
        486: "48.6rem",
        500: "50rem",
        528: "52.8rem",
        543: "54.3rem",
        556: "55.6rem",
        561: "56.1rem",
        600: "60rem",
        613: "61.3rem",
        634: "63.4rem",
        639: "63.9rem",
        660: "66rem",
        680: "68rem",
        736: "73.6rem",
        1112: "111.2rem",
        full: "100%",
        "12%": "12%",
      },
      height: {
        fit: "fit-content",
        min: "min-content",
        max: "max-content",
        "5/6": "83.333333%",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "1rem",
        11: "1.1rem",
        12: "1.2rem",
        13: "1.3rem",
        14: "1.4rem",
        15: "1.5rem",
        16: "1.6rem",
        17: "1.7rem",
        18: "1.8rem",
        19: "1.9rem",
        20: "2rem",
        21: "2.1rem",
        22: "2.2rem",
        23: "2.3rem",
        24: "2.4rem",
        25: "2.5rem",
        26: "2.6rem",
        27: "2.7rem",
        28: "2.8rem",
        29: "2.9rem",
        30: "3rem",
        31: "3.1rem",
        32: "3.2rem",
        33: "3.3rem",
        34: "3.4rem",
        35: "3.5rem",
        36: "3.6rem",
        37: "3.7rem",
        38: "3.8rem",
        39: "3.9rem",
        40: "4rem",
        41: "4.1rem",
        42: "4.2rem",
        43: "4.3rem",
        44: "4.4rem",
        45: "4.5rem",
        46: "4.6rem",
        47: "4.7rem",
        48: "4.8rem",
        49: "4.9rem",
        50: "5rem",
        51: "5.1rem",
        52: "5.2rem",
        53: "5.3rem",
        54: "5.4rem",
        55: "5.5rem",
        56: "5.6rem",
        57: "5.7rem",
        58: "5.8rem",
        59: "5.9rem",
        60: "6rem",
        61: "6.1rem",
        62: "6.2rem",
        63: "6.3rem",
        64: "6.4rem",
        65: "6.5rem",
        66: "6.6rem",
        67: "6.7rem",
        68: "6.8rem",
        69: "6.9rem",
        70: "7rem",
        71: "7.1rem",
        72: "7.2rem",
        73: "7.3rem",
        74: "7.4rem",
        75: "7.5rem",
        76: "7.6rem",
        77: "7.7rem",
        78: "7.8rem",
        79: "7.9rem",
        80: "8rem",
        81: "8.1rem",
        82: "8.2rem",
        83: "8.3rem",
        84: "8.4rem",
        85: "8.5rem",
        86: "8.6rem",
        87: "8.7rem",
        88: "8.8rem",
        89: "8.9rem",
        90: "9rem",
        91: "9.1rem",
        92: "9.2rem",
        93: "9.3rem",
        94: "9.4rem",
        95: "9.5rem",
        96: "9.6rem",
        97: "9.7rem",
        98: "9.8rem",
        99: "9.9rem",
        100: "10rem",
        101: "10.1rem",
        102: "10.2rem",
        103: "10.3rem",
        104: "10.4rem",
        105: "10.5rem",
        106: "10.6rem",
        107: "10.7rem",
        108: "10.8rem",
        109: "10.9rem",
        110: "11rem",
        111: "11.1rem",
        112: "11.2rem",
        113: "11.3rem",
        114: "11.4rem",
        115: "11.5rem",
        116: "11.6rem",
        117: "11.7rem",
        118: "11.8rem",
        119: "11.9rem",
        120: "12rem",
        121: "12.1rem",
        122: "12.2rem",
        123: "12.3rem",
        124: "12.4rem",
        125: "12.5rem",
        126: "12.6rem",
        127: "12.7rem",
        128: "12.8rem",
        129: "12.9rem",
        130: "13rem",
        131: "13.1rem",
        132: "13.2rem",
        133: "13.3rem",
        134: "13.4rem",
        135: "13.5rem",
        136: "13.6rem",
        137: "13.7rem",
        138: "13.8rem",
        139: "13.9rem",
        140: "14rem",
        141: "14.1rem",
        142: "14.2rem",
        143: "14.3rem",
        144: "14.4rem",
        145: "14.5rem",
        146: "14.6rem",
        147: "14.7rem",
        148: "14.8rem",
        149: "14.9rem",
        150: "15rem",
        151: "15.1rem",
        152: "15.2rem",
        153: "15.3rem",
        154: "15.4rem",
        155: "15.5rem",
        156: "15.6rem",
        157: "15.7rem",
        158: "15.8rem",
        159: "15.9rem",
        160: "16rem",
        161: "16.1rem",
        162: "16.2rem",
        163: "16.3rem",
        164: "16.4rem",
        165: "16.5rem",
        166: "16.6rem",
        167: "16.7rem",
        168: "16.8rem",
        169: "16.9rem",
        170: "17rem",
        171: "17.1rem",
        172: "17.2rem",
        173: "17.3rem",
        174: "17.4rem",
        175: "17.5rem",
        176: "17.6rem",
        177: "17.7rem",
        178: "17.8rem",
        179: "17.9rem",
        180: "18rem",
        181: "18.1rem",
        182: "18.2rem",
        183: "18.3rem",
        184: "18.4rem",
        185: "18.5rem",
        186: "18.6rem",
        187: "18.7rem",
        188: "18.8rem",
        189: "18.9rem",
        190: "19rem",
        191: "19.1rem",
        192: "19.2rem",
        193: "19.3rem",
        194: "19.4rem",
        195: "19.5rem",
        196: "19.6rem",
        197: "19.7rem",
        198: "19.8rem",
        199: "19.9rem",
        200: "20rem",
        220: "22rem",
        236: "23.6rem",
        250: "25rem",
        259: "25.9rem",
        270: "27rem",
        272: "27.2rem",
        295: "29.5rem",
        300: "30rem",
        317: "31.7rem",
        350: "35rem",
        400: "39rem",
        439: "43.9rem",
        445: "44.5rem",
        450: "45rem",
        460: "46rem",
        548: "54.8rem",
        579: "57.9rem",
        600: "60rem",
        660: "66rem",
        748: "74.8rem",
        900: "90rem",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
