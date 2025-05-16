var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "ch-Hamming-Codes",
  "level": "1",
  "url": "ch-Hamming-Codes.html",
  "type": "Chapter",
  "number": "2",
  "title": "Hamming Codes",
  "body": " Hamming Codes   Text before the first section.   "
},
{
  "id": "sec-Christine-Examples",
  "level": "1",
  "url": "sec-Christine-Examples.html",
  "type": "Section",
  "number": "3.1",
  "title": "Examples Workspace",
  "body": " Examples Workspace  Christine will put examples in progress here.  "
},
{
  "id": "sec-Christine-Exercises",
  "level": "1",
  "url": "sec-Christine-Exercises.html",
  "type": "Section",
  "number": "3.2",
  "title": "Exercises Workspace",
  "body": " Exercises Workspace  Christine will put examples in progress here.  "
},
{
  "id": "sec-Katie-Examples",
  "level": "1",
  "url": "sec-Katie-Examples.html",
  "type": "Section",
  "number": "4.1",
  "title": "Examples Workspace",
  "body": " Examples Workspace  Katie will put examples in progress here.  Throughout this course, messages will often be represented as strings of 0s and 1s. One way to conceptualize turning the Latin alphabet into strings of 0s and 1s is to use ASCII (American Standard Code for Information Interchange).      So, for example, the word VILLANOVA would be written as:           Generally, we won't dwell on what any particular string of 0s and 1s translates to in English. For now, just assume that all messages are represented as 0s and 1s (called bits for 'binary digits'), and that these strings contain information that could be understood and read with the proper mapping.   Day 1: Redundancy to Correct Errors    Practice sending information with redundancy  Understand the impact of the error rate     Form groups of 3 people. Person 1 will be sending a message. Person 2 will represent a noisy channel . Person 3 will be receiving the message.     Person 1 should write a message on a personal whiteboard and make a record of it (write it down or take a picture). Make it at most 100 characters. (Count the characters and write down that number at the bottom of the board.)      Next, person 2 should randomly change up to 20% of the characters. This process is simulating sending the message across a noisy channel . Feel free to be malicious in your random choices.      Person 3 should recieve the message and try to write down what they think the original message was.      How might all groups improve the process to ensure they recover the original message?    What happens if you repeat the message?      Try the above steps again with a new repeated message.      Now all groups should work together on the message: 010. What happens when 3 copies of the message are sent? What about when 5 copies are sent?      Neat example: Hamming codes  We saw on day 1 that repeating a message can help to ensure accurate transmission across a `noisy channel'. But the point of this whole semester will be to discover methods that are more efficient (cheaper storage) than simple repetition. The following small example shows one method. Let's say that you have 4 data bits that you wish to send. You can do better than simple repetition by adding three parity bits to your message. Parity bits are a particular form of redundancy that you can add to data --- specifically they record whether the total number of ones is even (parity bit 0) or odd (parity bit 1).  For example, for each string, a parity bit is shown in red:  .  Label your 4 data bits as and your three parity bits as . Your message will be one of the following 16 strings:   Table of possible messages    0000 0001 0010 0011    0100 0101 0110 0111    1000 0101 1010 1011    1100 1101 1110 1111     To determine the codeword that you should send, the diagram in shows how to calculate the value of each parity bit.   By en:User:Cburnett - Own work; This W3C-unspecified vector image was created with Inkscape., CC BY-SA 3.0,     Since is contained in the circle with , and , that indicates that is a parity bit for those three data bits. For example, if your message has , and , there are an even number of 1s among those three data bits, so . The parity bits and are determined in the same way.   Message and Codeword Table    message  codeword    0000  0000 000    0001  0001 111    0010  0010 011    0011  0011 100    0100  0100 101    0101  0101 010    0110  0110 110    0111  0111 001    1000  1000 110    1001  1001 001    1010  1010 101    1011  1011 010    1100  1100 011    1101  1101 100    1110  1110 000    1111  1111 111      "
},
{
  "id": "sec-Katie-Examples-9",
  "level": "2",
  "url": "sec-Katie-Examples.html#sec-Katie-Examples-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bits "
},
{
  "id": "objectives",
  "level": "2",
  "url": "sec-Katie-Examples.html#objectives",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "  Practice sending information with redundancy  Understand the impact of the error rate   "
},
{
  "id": "send-message",
  "level": "2",
  "url": "sec-Katie-Examples.html#send-message",
  "type": "Worksheet Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "  Person 1 should write a message on a personal whiteboard and make a record of it (write it down or take a picture). Make it at most 100 characters. (Count the characters and write down that number at the bottom of the board.)   "
},
{
  "id": "add-errors",
  "level": "2",
  "url": "sec-Katie-Examples.html#add-errors",
  "type": "Worksheet Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "  Next, person 2 should randomly change up to 20% of the characters. This process is simulating sending the message across a noisy channel . Feel free to be malicious in your random choices.   "
},
{
  "id": "worksheet-decode",
  "level": "2",
  "url": "sec-Katie-Examples.html#worksheet-decode",
  "type": "Worksheet Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "  Person 3 should recieve the message and try to write down what they think the original message was.   "
},
{
  "id": "worksheet-redundancy",
  "level": "2",
  "url": "sec-Katie-Examples.html#worksheet-redundancy",
  "type": "Worksheet Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "  How might all groups improve the process to ensure they recover the original message?    What happens if you repeat the message?   "
},
{
  "id": "worksheet-try-w-redundant",
  "level": "2",
  "url": "sec-Katie-Examples.html#worksheet-try-w-redundant",
  "type": "Worksheet Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "  Try the above steps again with a new repeated message.   "
},
{
  "id": "worksheet-repeat",
  "level": "2",
  "url": "sec-Katie-Examples.html#worksheet-repeat",
  "type": "Worksheet Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "  Now all groups should work together on the message: 010. What happens when 3 copies of the message are sent? What about when 5 copies are sent?   "
},
{
  "id": "sec-Katie-Examples-11-2",
  "level": "2",
  "url": "sec-Katie-Examples.html#sec-Katie-Examples-11-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parity bits "
},
{
  "id": "sec-Katie-Examples-11-5",
  "level": "2",
  "url": "sec-Katie-Examples.html#sec-Katie-Examples-11-5",
  "type": "Table",
  "number": "4.1.1",
  "title": "Table of possible messages",
  "body": " Table of possible messages    0000 0001 0010 0011    0100 0101 0110 0111    1000 0101 1010 1011    1100 1101 1110 1111    "
},
{
  "id": "sec-Katie-Examples-11-6",
  "level": "2",
  "url": "sec-Katie-Examples.html#sec-Katie-Examples-11-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "codeword "
},
{
  "id": "fig-hamming",
  "level": "2",
  "url": "sec-Katie-Examples.html#fig-hamming",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " By en:User:Cburnett - Own work; This W3C-unspecified vector image was created with Inkscape., CC BY-SA 3.0,    "
},
{
  "id": "sec-Katie-Examples-11-9",
  "level": "2",
  "url": "sec-Katie-Examples.html#sec-Katie-Examples-11-9",
  "type": "Table",
  "number": "4.1.3",
  "title": "Message and Codeword Table",
  "body": " Message and Codeword Table    message  codeword    0000  0000 000    0001  0001 111    0010  0010 011    0011  0011 100    0100  0100 101    0101  0101 010    0110  0110 110    0111  0111 001    1000  1000 110    1001  1001 001    1010  1010 101    1011  1011 010    1100  1100 011    1101  1101 100    1110  1110 000    1111  1111 111    "
},
{
  "id": "sec-Katie-Exercises",
  "level": "1",
  "url": "sec-Katie-Exercises.html",
  "type": "Section",
  "number": "4.2",
  "title": "Exercises Workspace",
  "body": " Exercises Workspace  Katie will put exercises in progress here. I am having trouble putting instructions at the beginning of a list of tasks. Need to figure out how  For each of the following vectors, determine if it is in the code with parity-check matrix .           "
},
{
  "id": "sec-Katie-Exercises-4",
  "level": "2",
  "url": "sec-Katie-Exercises.html#sec-Katie-Exercises-4",
  "type": "Activity",
  "number": "4.2.1",
  "title": "",
  "body": "        "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
