// Variable for storing bills
var bills = [];

export const getBills = async (req, res) => {
  try {
    res.status(200).json(bills); // Directly retun all the bills data
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

export const postBill = async (req, res) => {
  try {
    // Get the value from request body and assign a defalut value if user miss some information
    const {
      firstName = "NA",
      lastName = "NA",
      address = "NA",
      dateOfService = "NA",
      billAmount = "NA",
    } = req.body;

    const newBill = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      dateOfService: dateOfService,
      billAmount: billAmount,
    };

    bills.push(newBill); // add new bill to database

    // Return a JOSN to show the bill just added
    res.status(200).json({ NewBill: newBill });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
