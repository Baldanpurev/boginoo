const express = require("express");
const User = require("../models/userModel");

exports.getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({
      test: "test",
      user,
    });
  } catch (err) {
    console.error(err);
  }
};
exports.createUser = async (req, res) => {
  console.log("log");
  try {
    const neww = req.body;
    const user = await User.create(neww);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("err");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {}
};
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const neww = req.body;
    const user = await User.findByIdAndUpdate(id, neww);
    res.send(user);
  } catch (error) {}
};
exports.createShort = async (req, res) => {
  const { orignal_link, ownerID } = req.body;
  let stringId = (Math.random() + 1).toString(36).substring(7);
  try {
    const createdShort = await User.create({
      orignal_link: orignal_link,
      short_link: stringId,
      ownerID: ownerID,
    });
    res.send({ short: createdShort });
  } catch (error) {
    res.send({ error: error });
  }
};
exports.deleteShort = async (req, res) => {
  try {
    const id = req.params.id;
    const delete_short = await User.findByIdAndDelete(id);
    res.status(200).json(delete_short);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

exports.getLinkByUser = async (req, res) => {
  const { email } = req.params;
  const Links = await User.find({ ownerID: email });
  console.log(Links, email);
  res.status(200).json(Links);
};

exports.getRedirectLink = async (req, res) => {
  try {
    const { short_link } = req.params;
    console.log(req.params);
    const Link = await User.findOne({ short_link: short_link });
    console.log(Link);
    if (Link) {
      res.status(200).json({ orignal_links: Link });
    } else {
      res.status(404).json({ message: "iim zuil bhgui" });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
