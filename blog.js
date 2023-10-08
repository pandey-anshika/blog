
const {Blog, validate} = require('../model/blogmodel'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {mw} = require('../middleware/mw');

router.get('/', async (req, res) => {
const blogs = await Blog.find();
  res.send(blogs);
});

router.get('/:',mw, async (req, res) => {
const blog = await Blog.find({title: '/.* privacy .*/ '})
const blog1 = await Blog.find({title:{$gt:10}})
const blog2 = await Blog.count();
const blog3 = Array.from(new Set(blog));

res.json([...blog,...blog1]);

console.log("Total number of documents fetched in collection:",blog2,"and unique document count is",blog3.length);

  if (!blog) return res.status(404).send('The blog was not found.');

  res.send(blog);
});

router.get('/?query=privacy', async (req, res) => {
  const blogs = await Blog.find({title: /.* privacy .*/i});
    res.send(blogs);
  });

module.exports = router;  