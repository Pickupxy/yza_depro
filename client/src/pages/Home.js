import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1 className="text-center mt-4">欢迎来到我的博客</h1>
            <div className="container mt-4">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">第一篇博客</h5>
                        <p className="card-text">这是我的第一篇博客内容，使用 Markdown 编写！</p>
                        <Link to="/post/1" className="btn btn-primary">阅读更多</Link>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">React 入门</h5>
                        <p className="card-text">React 是一个用于构建用户界面的 JavaScript 库。</p>
                        <Link to="/post/2" className="btn btn-primary">阅读更多</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}