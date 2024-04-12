export const color = [
  "White",
  "Black",
  "Red",
  "Marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
  ];

  export const filters= [
    {
      id: "color",
      name: "color",
      options: [
        {value: "white", label: "White"},
        {value: "beige", label: "Beige"},
        {value: "blue", label: "Blue"},
        {value: "brown", label: "Brown"},
        {value: "green", label: "Green"},
        {value: "purple", label: "Purple"},
        {value: "yellow", label: "Yellow"},
        {value: "white", label: "white"},
        {value: "black", label: "Black"},
      ],
    },

    {
      id: "size",
      name: "Size",
      options: [
        {value: "S", label: "S"},
        {value: "M", label: "M"},
        {value: "L", label: "L"},
      ],
    },

  ];

  export const singleFilter=[
    { 
      id: "price",
      name: "Price",
      options: [
        {value: "9-59", label: "$9 To $59"},
        {value: "59-99", label: "$59 To $99"},
        {value: "99-159", label: "$99 To $159"},
        {value: "159-199", label: "$159 To $199"},
        {value: "199-259", label: "$199 To $259"},

      ],
    },
    {
      id: "discount",
      name: "DISCOUNT RANGE",
      options: [
        {
          value: "10",
          label: "10% And Above",
        },
        {value: "20", label: "20% And Above"},
        {value: "30", label: "30% And Above"},
        {value: "40", label: "40% And Above"},
        {value: "50", label: "50% And Above"},
        {value: "60", label: "60% And Above"},
        {value: "70", label: "70% And Above"},
        {value: "80", label: "80% And Above"},
      ],
    },
  ];
