declare module 'ip' {
  type Address = string;

  const ip: {
    address: () => Address;
  };

  export default ip;
}
