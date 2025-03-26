from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

import scipy

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/output")
async def get_output():
    return {"version": "0.1.0"}

if __name__ == "__main__":
    uvicorn.run(app, host="http://localhost", port=8000)