export default defineAppConfig({
  ui: {
    colors: {
      primary: 'yellow',
      secondary: 'cyan',
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        size: 'xl',
      },
    },
    calendar: {
      slots: {
        cellTrigger: 'cursor-pointer',
      },
      defaultVariants: {
        size: 'xl',
      },
    },
    input: {
      defaultVariants: {
        size: 'xl',
      },
    },
    formField: {
      defaultVariants: {
        size: 'xl',
      },
    },
    selectMenu: {
      defaultVariants: {
        size: 'xl',
      },
    },
    inputNumber: {
      defaultVariants: {
        size: 'xl',
      },
    },
  },
});
