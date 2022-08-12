A take-home assignment for dagsHub

## I spent most of my time on styling, Maybe 1 hour on actual functionality.
So please consider my mockup to get a picture of what i would do.
## For concept let's use Figma
I used the color pallete of stipe.com/jobs.
div style, border radius, shadow.
progress bar - use same rounded style
Surprise! their font cost money. we'll use something else.

![mockup](https://github.com/miromeir/dagshub/blob/master/mockup.png?raw=true)


To save efforts with css effects we'll use material ui.

## Web server:
- 2 endpoints: 1 that accepts an integer in range 1-999. adds to total sum.
               1 that shows total amount of donation so far

## If i had more time...
-Cleanup react code so that there are less inline styles.<br/>
-Fetch the total donation amount from root endpoint and connect the progress bar to it.<br/>
-CSS to make it look like my figma design.<br/>
-Validate ui input(currently only server validation)
## Instructions:
```
git clone git@github.com:miromeir/dagshub.git
```
To run the server:
```
cd dagshub/server
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
Server should be up now.<br/>
To run the UI:
```
cd dagshub/ui
yarn install
yarn start
```
UI should now be visible on port 3000
