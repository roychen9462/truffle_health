var bills = [
  {
    firstName: "Roy",
    lastName: "Chen",
    address: "xxx, Los Angeles, CA",
    dateOfService: "02/10/2022",
    billAmount: "100",
  },
];

export const getBills = async (req, res) => {
  try {
    res.status(200).json(bills);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

export const postBill = async (req, res) => {
  try {
    const { firstName, lastName, address, dateOfService, billAmount } =
      req.body;
    bills.push(req.body);

    res.status(200).json({ NewBill: req.body });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
