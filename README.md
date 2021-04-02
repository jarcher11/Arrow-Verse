#Measurement Converter Project
Jason Archer

The project works as converter for measurements such as meters, inches, millimeters, and centimeters. The idea for the project came from my workplace where my position is working as a quality inspector. Everyday I go back and forth between the metric and the imperial systems of measurement, so I thought it would be great to make a converter. All one has to do is choose which measurements to compare by clicking the selection button where the four different measurements are given as options. Do they same for the other selection table where the output would be. Finally, insert your input and with JavaScript a formula will fire off the answer for the output. The converter will also show your input and output history underneath for reference.  

##CSS Features used.
- I used flexbox to organize my content in the <div>. The input and output table goes from a row format to column.

##JavaScript Features used.
- I created a JavaScript function that calculates the input and output--with the answer shown in the output box.

- Created a JavaScript array with values that displays the contents on my page.

- Have a JavaScript loop created that displays HTML on my page. 

##Media Queries 
-For mobile phone to tablets (min-width: 800px) uses flex direction to format both <select> elements and <option> elements in a row formatting.

-For the larger screen size (min-width: 1200px), I have the select and option elements in a column setting across the page. I added padding to the id:history so that it would give space between the value history that shows after you add an input and the <div> with the class:"measurement". Aligned the input and output placeholders to center. 