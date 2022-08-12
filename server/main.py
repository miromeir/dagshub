from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Keep track of donation sum. 
# Note! this is unsafe if working with more than 1 instance of this app(multiple workers)
# It's only suffecient for this simple task
sum = 0

@app.get("/")
async def root():
    return sum

@app.get("/donate/{donation}")
async def root(donation: int):
    global sum
    if donation <= 0 or donation > 999:
        raise HTTPException(status_code=400, detail="illegal donation sum")
    sum = sum + donation
    return {"message": "Donation accepted"}

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)